import { useState } from 'react'

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import InputForm from '../input-form/input-form'
import './signup-form.styles.scss'

const SignupForm = () => {
    const defaultFields = {
        displayName: '',
        email: '',
        pass: '',
        confirmPass: ''
    }
    const [formFields, setFormFields] = useState(defaultFields)
    const {displayName, email, pass, confirmPass} = formFields
    
    const handleChange = (ev) => {
        const { name, value } = ev.target
        setFormFields( {
                ...formFields,
                [name]: value.trim()
        } )
    }

    const handleSubmit = async(ev) => {
        ev.preventDefault()
        if (pass !== confirmPass) {
            alert('password and confirmPassword must be equal.')
            return
        }
        
        try {
            // Athentication record is created in the Firebase
            const res = await createAuthUserWithEmailAndPassword(email, pass, confirmPass)
            handleReset()
        } catch (error) {
            alert(error.toString())
        }
    }

    const handleReset = () => {
        setFormFields(defaultFields)
    }

    return (
        <>
            <div className='sign-up-container'>
                <h2>Don't have an account?</h2>
                <span>Sign up with your email and password</span>
                
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <InputForm id='displayName'
                        label='Display Name'
                        type='text'
                        name='displayName'
                        value={displayName} 
                        onChange={handleChange}
                        minLength={2}
                    />

                    <InputForm id='email'
                        label='Email'
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />

                    <InputForm id='pass'
                        label='Password'
                        type='password'  
                        name='pass'
                        value={pass}
                        onChange={handleChange}
                        minLength={6}
                     />

                    <InputForm id='confirmPass'
                        type='password'
                        label='Confirm Password'
                        name='confirmPass'
                        value={confirmPass}
                        onChange={handleChange}
                        minLength={6}
                    />

                    <div>
                        <button type='submit'>Submit</button>
                        <button type='reset'>Reset</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default SignupForm