// src/firebase/posts.js
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  serverTimestamp,
  query,
  orderBy,
  getDocs,
  onSnapshot,
  increment,
} from "firebase/firestore";

// cria um post (texto + opcional imagemUrl)
export const criarPost = async ({ autorId, autorNome, conteudo, imagemUrl = null }) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      autorId,
      autorNome,
      conteudo,
      imagemUrl,
      curtidas: 0,
      dataCriacao: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Erro criarPost:", error);
    return { success: false, error };
  }
};

// ouvir posts em tempo real (ordenado)
export const ouvirPosts = (callback) => {
  const q = query(collection(db, "posts"), orderBy("dataCriacao", "desc"));
  return onSnapshot(q, (snapshot) => {
    const posts = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(posts);
  });
};

// curtir (incrementa)
export const curtirPost = async (postId) => {
  try {
    const ref = doc(db, "posts", postId);
    await updateDoc(ref, { curtidas: increment(1) });
    return { success: true };
  } catch (error) {
    console.error("Erro curtirPost:", error);
    return { success: false, error };
  }
};

// adicionar comentário em subcoleção posts/{postId}/comentarios
export const adicionarComentario = async ({ postId, autorId, autorNome, texto }) => {
  try {
    const colRef = collection(db, "posts", postId, "comentarios");
    await addDoc(colRef, {
      autorId,
      autorNome,
      texto,
      dataCriacao: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Erro adicionarComentario:", error);
    return { success: false, error };
  }
};

// opcional: listar comentários (ouvir em tempo real)
export const ouvirComentarios = (postId, callback) => {
  const q = query(collection(db, "posts", postId, "comentarios"), orderBy("dataCriacao", "asc"));
  return onSnapshot(q, (snapshot) => {
    const comentarios = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(comentarios);
  });
};
