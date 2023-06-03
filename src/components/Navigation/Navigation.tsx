import React from "react";

// import  { Link } from "react-router-dom"

interface INav {
  children?: JSX.Element;
}

export const Navigation: React.FC<INav> = ({ children }) => (
  <nav className="d-flex flex-row">
    <a className="btn text-primary" href="/">
      <h1>SocialMedia</h1>
    </a>
    {children && (
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <a>{children}</a>
        </li>
      </ul>
    )}
  </nav>
);
