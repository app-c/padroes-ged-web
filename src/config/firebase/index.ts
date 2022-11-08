import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {

  apiKey: "AIzaSyDsiVd-sdv5TNop00PI-LRpXii6xnyB-ts",

  authDomain: "ged-cpfl.firebaseapp.com",

  projectId: "ged-cpfl",

  storageBucket: "ged-cpfl.appspot.com",

  messagingSenderId: "964648661777",

  appId: "1:964648661777:web:0e44819474c6c139e992b0",

  measurementId: "G-63WPK78T7N"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const storege = getStorage(app)
export const fire = getFirestore(app)

const analytics = getAnalytics(app);