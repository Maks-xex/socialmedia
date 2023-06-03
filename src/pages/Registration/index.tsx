import React from "react";

import { Registration } from "../../components/Registration/Registration";

import classes from "../index.module.scss";

export const RegistrationPage: React.FC = () => (
  <div
    className={`${classes.container} d-flex flex-column align-items-center bg-white mx-auto mt-4 rounded p-5`}
  >
    <Registration />
  </div>
);
