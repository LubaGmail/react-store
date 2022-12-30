import { useState } from 'react'

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase'

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
            const res = await createAuthUserWithEmailAndPassword(email, pass, confirmPass)
            handleReset()
            console.log('res', res)
        } catch (error) {
            alert(error.toString())
        }
    }

    const handleReset = (ev) => {
        setFormFields(defaultFields)
    }

    return (
        <>
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <label>Display Name: </label>
                    <input required
                        type='text' id='displayName' minLength={2}
                        name='displayName' value={displayName} 
                        onChange={handleChange}
                    />
                    <br />

                    <label>Email: </label>
                    <input required
                        type='email' id='email'
                        name='email' value={email}
                        onChange={handleChange}
                    />
                    <br />

                    <label>Password: </label>
                    <input required
                        type='password' id='pass' minLength={6}
                        name='pass' value={pass}
                        onChange={handleChange}
                     />
                    <br />

                    <label>Confirm Password: </label>
                    <input required
                        type='password' id='confirmPass' minLength={6}
                        name='confirmPass' value={confirmPass}
                        onChange={handleChange}
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