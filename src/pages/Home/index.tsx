import React from "react";

import { Login } from "../../components/Login/Login";

import classes from "../index.module.scss";

export const Home: React.FC = () => (
  <div
    className={`${classes.container} d-flex flex-column align-items-center bg-white mx-auto mt-4 rounded p-5`}
  >
    <Login />
    <div className="d-grid gap-2 pt-4 w-100">
      <a
        id="registr"
        className="btn btn-primary "
        href="registration"
        role="button"
      >
        Register
      </a>
    </div>
  </div>
);
