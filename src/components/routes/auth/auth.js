import SigninForm from "../../signin-form/signin-form"
import SignupForm from '../../signup-form/signup-form'

import './auth.styles.scss'

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
