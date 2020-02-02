import React from "react";
import auth from "./auth";

export const AppLayout = props => {
  return (
    <div>
      <h1>Home Page</h1>
      <button                                      //LogOut Button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};
