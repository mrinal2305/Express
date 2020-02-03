import React from "react";
import auth from "./auth";
import { Link } from 'react-router-dom';
import { TitleBar } from './titleBar';

export const AppLayout = props => {
  return (
    <div>
      <TitleBar />
      <Link to={`/home/user`}>User</Link>
      <Link to={`/home/driver`}>Driver</Link>
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
