import React from 'react';
import './sign-in-sign-out.styles.scss';
import SignIn from '../../Component/sign-in/sign-in.component'
import SignUp from '../../Component/sign-up/sign-up.component';

const SignInAndSignOutPage = () => (
<div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
</div>
    )

export default SignInAndSignOutPage;