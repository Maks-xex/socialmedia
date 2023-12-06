import React from "react";
import { FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";

interface IForm<T extends FieldValues> {
  fields: T;
  onSubmit: SubmitHandler<T>;
}

export const Form = <T extends object>({
  onSubmit,
  fields,
}: IForm<T>): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({});
  const onSubmitFormHandler: SubmitHandler<T> = (data) => {
    onSubmit(data);
  };

  return (
    <form className="w-100" onSubmit={handleSubmit(onSubmitFormHandler)}>
      {Object.keys(fields).map((field, index) => (
        <div className="form-group mb-3" key={index}>
          <label htmlFor={field}>{field}</label>
          <input
            type="text"
            className="form-control"
            id={field}
            placeholder={field}
            {...register(field as Path<T>, { required: true })}
          />
          {errors[field as keyof T]?.type === "required" && (
            <span className="text-danger">Required</span>
          )}
        </div>
      ))}
      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
};
