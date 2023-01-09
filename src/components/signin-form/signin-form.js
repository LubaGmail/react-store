import { useState, useContext } from 'react'

// export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import './signin-form.styles.scss'
import InputForm from '../input-form/input-form'

import { UserContext } from '../../contexts/user-context'

const SigninForm = () => {
    const defaultFields = {
        email: '',
        pass: ''
    }
    const [formFields, setFormFields] = useState(defaultFields)
    const { email, pass } = formFields
    
     const { currentUser } = useContext(UserContext);
    
    const handleChange = (ev) => {
        const { name, value } = ev.target
        setFormFields( {
            ...formFields,
            [name]: value.trim()
        } )
    }

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup()
        
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async(ev) => {
        ev.preventDefault()
        const { email, pass } = formFields
       
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, pass)

        } catch (error) {
          alert(error.toString())  
        }
        setFormFields(defaultFields)    
    }

    return (
        <>
            <div className='sign-in-container'>
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password or with your Google account</span>
              
                {
                    currentUser && (
                        <div>
                            currentUser: {JSON.stringify(currentUser['email'])}
                        </div>
                    )
                } 
                          
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
                        <button type='submit' className='signin-buttons'
                            onClick={handleSubmit} disabled={currentUser}
                        >
                            Sign In
                        </button>
                        <button type='button' className='signin-buttons google-button' 
                            onClick={logGoogleUser} disabled={currentUser}
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
