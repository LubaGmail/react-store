import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_aLrzSqrunPW4Xq4rGvWFJpNMxXuV7gw",
    authDomain: "clothing-db-63b47.firebaseapp.com",
    projectId: "clothing-db-63b47",
    storageBucket: "clothing-db-63b47.appspot.com",
    messagingSenderId: "953513898950",
    appId: "1:953513898950:web:e153e88bdef7bb51f6b8c7"
};

// firebase sdk
const firebaseApp = initializeApp(firebaseConfig);

// instance of provider; you can have have multiple providers
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

// clothing-db-63b47
export const db = getFirestore();

// doc based on user.uid and user.accessToken
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;

    // contains databaseId, segments Array['users', 'AYx5rSvo1SPayARoHHLqbY47vDl1']
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    const exists = userSnapshot.exists()

    if (!exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, pass, confirmPass) => {
    // validate fields
    if (pass !== confirmPass || pass.length < 6) {
        throw new Error('signup-form.handleSubmit - password and confirmPassword must be equal.')
    }

    //  auth is a singleton through the life of the app
    const res = await createUserWithEmailAndPassword(auth, email, pass)
    return res
}

// application wide
export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)




