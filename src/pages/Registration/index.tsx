import React from "react";

import { Form } from "../../components/Form/Form";

import classes from "../index.module.scss";

import { IFields } from "../../types/registration";

const fields: IFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegistrationPage: React.FC = () => {
  const submitRegFormHandler = (formData: IFields): void => {
    console.log(formData);
  };

  return (
    <div
      className={`${classes.container} d-flex flex-column align-items-center bg-white mx-auto mt-4 rounded p-5`}
    >
      <Form<IFields> fields={fields} onSubmit={submitRegFormHandler} />
    </div>
  );
};
