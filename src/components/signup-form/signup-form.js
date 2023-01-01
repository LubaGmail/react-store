import { useState } from 'react'

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'
import InputForm from '../input-form/input-form'

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
            // console.log('res', res)
        } catch (error) {
            alert(error.toString())
        }
    }

    const handleReset = () => {
        setFormFields(defaultFields)
    }

    return (
        <>
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <InputForm id='displayName'
                        label='Display Name: '
                        type='text'
                        name='displayName'
                        value={displayName} 
                        onChange={handleChange}
                        minLength={2}
                    />
                    <br />

                    <InputForm id='email'
                        label='Email: '
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    />
                    <br />

                    <InputForm id='pass'
                        label='Password: '
                        type='password'  
                        name='pass'
                        value={pass}
                        onChange={handleChange}
                        minLength={6}
                     />
                    <br />

                    <InputForm id='confirmPass'
                        type='password'
                        label='Confirm Password: '
                        name='confirmPass'
                        value={confirmPass}
                        onChange={handleChange}
                        minLength={6}
                    />
                    <br />

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