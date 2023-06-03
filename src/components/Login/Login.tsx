import React from "react";

export const Login: React.FC = () => (
  <form className="w-100">
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input type="password" className="form-control" id="password" />
    </div>
    <div className="mb-3 form-check">
      <input
        type="checkbox"
        className="form-check-input pointer"
        id="rememberMe"
      />
      <label className="form-check-label pointer" htmlFor="rememberMe">
        Remember me
      </label>
    </div>
    <button type="submit" className="btn btn-primary">
      Log in
    </button>
  </form>
);
