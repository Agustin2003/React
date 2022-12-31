
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCqWEfLcBgjVuhpgo_VcN880onqsImK2HQ",
  authDomain: "pagina-web-23d89.firebaseapp.com",
  projectId: "pagina-web-23d89",
  storageBucket: "pagina-web-23d89.appspot.com",
  messagingSenderId: "759837947979",
  appId: "1:759837947979:web:64cec3eb7185e4779475ce"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)