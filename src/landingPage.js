import React from "react";
import auth from "./auth";

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
      <h1>Landing Page(Auth)</h1>
      <form onSubmit={handleSubmit}>
      <input type="text"    placeholder = "User Name" name="username" onChange={handleInput}/>
      <input type="password"placeholder = "Password" name = "password" onChange={handleInput}/>
      <input type="submit" value="Submit" />
      </form>
     
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
