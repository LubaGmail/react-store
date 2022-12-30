// export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase"

const SignIn = () => {
    const logGoogleUser = async () => {
        // user.accessToken to make a crud request
        const { user } = await signInWithGooglePopup()
        // Ref to users collection
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <>
            <h2>Sign In</h2>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </>
    )
}

export default SignIn
