import { useState } from 'react'

// export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import './signin-form.styles.scss'
import InputForm from '../input-form/input-form'

const SigninForm = () => {
    const defaultFields = {
        email: '',
        pass: ''
    }
    const [formFields, setFormFields] = useState(defaultFields)
    const { email, pass} = formFields
    
    const handleChange = (ev) => {
        const { name, value } = ev.target
        setFormFields( {
            ...formFields,
            [name]: value.trim()
        } )
    }

    const logGoogleUser = async () => {
        console.log('logGoogleUser')
        // user.accessToken to make a crud request
        const { user } = await signInWithGooglePopup()
        // Ref to users collection
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        console.log('submit', formFields)
    }

    return (
        <>
            <div className='sign-in-container'>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password or with your Google account</span>
                
                <form onSubmit={handleSubmit}>
                    <InputForm id='email'
                        label='Email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        required 
                    />
                     

                    <InputForm id='pass'
                        label='Password'
                        type='password'  
                        name='pass'
                        value={pass}
                        onChange={handleChange}
                        minLength={6}
                        required
                     />

                    <div className='button-div'>
                    <button type='submit' className='button-container'
                        onClick={handleSubmit} 
                    >
                        Sign In
                    </button>
                    <button type='button' className='button-container google-button' 
                        onClick={logGoogleUser}
                    >
                        Google Sign In
                    </button>
                </div>
                </form>

            </div>
        </>
    )
}

export default SigninForm
