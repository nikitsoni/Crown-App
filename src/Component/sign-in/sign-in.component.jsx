import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

handelSubmit = e =>{
    e.preventDefault();
    this.setState({email: '', password: ''})
}

handelChange = e =>{
    const {value, name} = e.target;
    this.setState({[name]: value})
}

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account.</h2>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput name='email' label='Email' type='email' handelChange={this.handelChange} value={this.state.email} required />
                    <FormInput name='password' label='Password' type='password' handelChange={this.handelChange} value={this.state.password} required/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;