import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAG9gN5ivpSmPB8LExVU-BbqrTRbLHHURA",
  authDomain: "dropbox-5ad81.firebaseapp.com",
  projectId: "dropbox-5ad81",
  storageBucket: "dropbox-5ad81.appspot.com",
  messagingSenderId: "198414282011",
  appId: "1:198414282011:web:d387a3634fd0d43f6937be",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
