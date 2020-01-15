import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import './sign-in.styles.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
  constructor(props){
    super();
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" })
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: "", password: ""})
  }
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            required 
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            required 
            label="password"
            handleChange={this.handleChange} 
          />
          <div className="buttons">
            <CustomButton type="submit" >Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>          
        </form>
      </div>
    )
  }
}

export default SignIn;