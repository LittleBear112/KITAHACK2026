// functions/index.js

const { onCall } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const OpenAI = require("openai");

admin.initializeApp();

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

exports.matchCandidates = onCall(
  {
    secrets: [OPENAI_API_KEY],
  },
  async (request) => {
    const { jobId } = request.data;
    if (!jobId) throw new Error("jobId required");

    const db = admin.database();
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY.value(),
    });

    // 1️⃣ Fetch job
    const jobSnap = await db.ref(`jobs/${jobId}`).get();
    if (!jobSnap.exists()) throw new Error("Job not found");

    const job = jobSnap.val();
    const jobText = `
      ${job.title || ""}
      ${job.description || ""}
      ${job.category || ""}
    `;

    // 2️⃣ Create job embedding (once)
    const jobEmbedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: jobText,
    });

    const jobVector = jobEmbedding.data[0].embedding;

    // 3️⃣ Fetch applicants
    const appsSnap = await db.ref(`applications/${jobId}`).get();
    if (!appsSnap.exists()) return [];

    const results = [];

    for (const [appId, app] of Object.entries(appsSnap.val())) {
      const profileText = `
        ${app.skills || ""}
        ${app.experience || ""}
        ${app.bio || ""}
      `;

      const profileEmbedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: profileText,
      });

      const profileVector = profileEmbedding.data[0].embedding;

      const score = cosineSimilarity(jobVector, profileVector);
      const percent = Math.round(score * 100);

      // 4️⃣ Cache into database
      await db.ref(`applications/${jobId}/${appId}`).update({
        matchScore: percent,
        aiAnalyzedAt: Date.now(),
      });

      results.push({
        appId,
        matchScore: percent,
      });
    }

    return results;
  }
);

function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
}