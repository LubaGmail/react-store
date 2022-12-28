import { signInWithGooglePopup } from "../../../utils/firebase/firebase"

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log('r', response)
    }

    return (
        <>
            <h2>Sign In</h2>
            <button onClick={logGoogleUser}>Sign In with Google</button>
        </>
    )
}

export default SignIn
