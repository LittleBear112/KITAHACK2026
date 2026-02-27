// src/lib/uploadHelper.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

/**
 * 上传文件到 Firebase Storage
 * @param {File} file - 要上传的文件
 * @param {string} folder - 存储文件夹 (例如: 'avatars', 'resumes', 'portfolios', 'jobs')
 * @param {string} userId - 用户ID（用于组织文件路径）
 * @returns {Promise<string>} - 返回下载 URL
 */
export async function uploadFile(file, folder, userId) {
  if (!file) {
    throw new Error("没有选择文件");
  }

  // 验证文件大小 (最大 5MB)
  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    throw new Error("文件大小不能超过 5MB");
  }

  // 生成唯一文件名
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const fileExtension = file.name.split('.').pop();
  const fileName = `${timestamp}_${randomString}.${fileExtension}`;

  // 创建存储路径: folder/userId/fileName
  const storagePath = `${folder}/${userId}/${fileName}`;
  const storageRef = ref(storage, storagePath);

  try {
    // 上传文件
    const snapshot = await uploadBytes(storageRef, file);
    
    // 获取下载 URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error("上传失败:", error);
    throw new Error("文件上传失败，请重试");
  }
}

/**
 * 上传头像（带图片压缩和验证）
 * @param {File} file - 图片文件
 * @param {string} userId - 用户ID
 * @returns {Promise<string>} - 返回下载 URL
 */
export async function uploadAvatar(file, userId) {
  // 验证文件类型
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    throw new Error("只支持 JPG, PNG 或 WebP 格式的图片");
  }

  // 验证文件大小 (最大 2MB)
  const maxSize = 2 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error("头像文件大小不能超过 2MB");
  }

  return uploadFile(file, 'avatars', userId);
}

/**
 * 上传简历
 * @param {File} file - 简历文件
 * @param {string} userId - 用户ID
 * @returns {Promise<string>} - 返回下载 URL
 */
export async function uploadResume(file, userId) {
  // 验证文件类型
  const validTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (!validTypes.includes(file.type)) {
    throw new Error("只支持 PDF 或 Word 文档格式");
  }

  // 验证文件大小 (最大 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error("简历文件大小不能超过 5MB");
  }

  return uploadFile(file, 'resumes', userId);
}

/**
 * 上传作品集图片
 * @param {File} file - 图片文件
 * @param {string} userId - 用户ID
 * @returns {Promise<string>} - 返回下载 URL
 */
export async function uploadPortfolio(file, userId) {
  // 验证文件类型
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    throw new Error("只支持 JPG, PNG 或 WebP 格式的图片");
  }

  // 验证文件大小 (最大 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error("图片文件大小不能超过 5MB");
  }

  return uploadFile(file, 'portfolios', userId);
}

/**
 * 上传职位环境图片
 * @param {File} file - 图片文件
 * @param {string} userId - 雇主用户ID
 * @returns {Promise<string>} - 返回下载 URL
 */
export async function uploadJobImage(file, userId) {
  // 验证文件类型
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  if (!validTypes.includes(file.type)) {
    throw new Error("只支持 JPG, PNG 或 WebP 格式的图片");
  }

  // 验证文件大小 (最大 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    throw new Error("图片文件大小不能超过 5MB");
  }

  return uploadFile(file, 'jobs', userId);
}