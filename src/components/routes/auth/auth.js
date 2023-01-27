import SigninForm from "../../signin-form/signin-form"
import SignupForm from '../../signup-form/signup-form'

import './auth.styles.scss'

/**
    <Route path='auth' element={<Auth />} />
*/
const Auth = () => {
   
    return (
        <div className="auth-container"
        >
            <SigninForm />
            <SignupForm />
        </div>
    )
}

export default Auth
