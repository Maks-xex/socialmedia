import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { RegistrationPage } from "./pages/Registration";

export const App: React.FC = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  </>
);
