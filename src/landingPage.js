import React from 'react';

import auth from './auth';
import { AuthForm } from './ui/landingPage';

export const LandingPage = props => {
  var user = {
    username : '',
    password : ''
  }

  
  var handleSubmit = (event)=>{
    event.preventDefault();
     auth.login(() => {
      props.history.push("/home");
    },user);  
  }

  var handleInput = (event)=>{  
    let nam = event.target.name;
    let val = event.target.value;
    user[nam] = val;
  }

  return (
    <div>
      <AuthForm onClick={handleSubmit} onChange={handleInput}/>
   
    </div>
  );
};
