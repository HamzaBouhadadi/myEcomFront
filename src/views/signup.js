import React from 'react'
import SignupFormLayout from '../layout/authentication/signup';
import SignupForm from '../components/authentication/signup';
function SignUpView(){
    return (
        <>
            <SignupFormLayout>
                <SignupForm />
            </SignupFormLayout>
        </>
    )
}

export default SignUpView;