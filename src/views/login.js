import React from 'react'
import LoginFormLayout from '../layout/authentication/login';
import LoginForm from '../components/authentication/login';
function LogInView(){
    return (
        <>
            <LoginFormLayout>
                <LoginForm />
            </LoginFormLayout>
  
        </>
    )
}

export default LogInView;