import React, { useReducer } from "react";
import auth from "./auth";
import {AuthForm} from './ui/landingPage';

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
      {/* <form onSubmit={handleSubmit}>
      <input type="text"    placeholder = "User Name" name="username" onChange={handleInput}/>
      <input type="password"placeholder = "Password" name = "password" onChange={handleInput}/>
      <input type="submit" value="Submit" />
      </form> */}
     
      {/* <button
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button> */}
    </div>
  );
};
