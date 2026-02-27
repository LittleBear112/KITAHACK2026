// migrate.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get } from 'firebase/database';

// 从 src/lib/firebase.js 复制您的配置
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "https://fastjob-db673-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fastjob-db673",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function migrate() {
  console.log('🚀 开始迁移...\n');

  const userId = 'hWkx7qcmD7bDDceIaHcYWRHDQWO2';
  
  // 新数据结构
  const newPlan = {
    type: 'monthly',
    expiryDate: Date.now() + (30 * 24 * 60 * 60 * 1000), // 30天后
    purchasedAt: Date.now(),
    createdAt: Date.now(),
  };

  // 更新到 Firebase
  await set(ref(db, `plans/${userId}`), newPlan);
  
  console.log('✅ 迁移完成！');
  console.log('新数据：', newPlan);
  process.exit(0);
}

migrate();