import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth"
// install firebase tools individually

const firebaseConfig = {
  apiKey: "AIzaSyAVMa2Tuw9adyrFqrZcVYdiwAiftBEdKvg",
  authDomain: "eshop-e3348.firebaseapp.com",
  projectId: "eshop-e3348",
  storageBucket: "eshop-e3348.appspot.com",
  messagingSenderId: "544852293161",
  appId: "1:544852293161:web:ac9bf8d7ce7dcb23d7ce38",
  measurementId: "G-YLDZ1H7NXY",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const auth = getAuth(app)
// console.log(auth)
// const auth = firebase.auth()

export { db, auth }
