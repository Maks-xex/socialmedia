import React from "react";

export const Registration: React.FC = () => (
  <form className="w-100">
    <div className="mb-3">
      <label htmlFor="username" className="form-label">
        Name
      </label>
      <input type="text" className="form-control" id="username" />
    </div>
    <div className="mb-3">
      <label htmlFor="userlastname" className="form-label">
        Last name
      </label>
      <input type="text" className="form-control" id="userlastname" />
    </div>
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
    <div className="mb-3">
      <label htmlFor="repassword" className="form-label">
        Repeat Password
      </label>
      <input type="password" className="form-control" id="repassword" />
    </div>
    <button type="submit" className="btn btn-primary">
      Register
    </button>
  </form>
);
