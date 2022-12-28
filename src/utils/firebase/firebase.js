import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyA_aLrzSqrunPW4Xq4rGvWFJpNMxXuV7gw",
    authDomain: "clothing-db-63b47.firebaseapp.com",
    projectId: "clothing-db-63b47",
    storageBucket: "clothing-db-63b47.appspot.com",
    messagingSenderId: "953513898950",
    appId: "1:953513898950:web:e153e88bdef7bb51f6b8c7"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters(
    {
        prompt: 'select_account'
    }
)
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)




