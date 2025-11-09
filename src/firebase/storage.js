// src/firebase/storage.js
import { storage } from "./firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImagem = async (file, pasta = "posts") => {
  try {
    const storageRef = ref(storage, `${pasta}/${Date.now()}_${file.name}`);
    const snap = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snap.ref);
    return { success: true, url };
  } catch (error) {
    console.error("Erro uploadImagem:", error);
    return { success: false, error };
  }
};
