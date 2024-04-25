import React, { useEffect } from "react";
import {
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "../pages/home";


const AppRoutes: React.FC = () => {
  useEffect(() => {
  });
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  );
};

export default AppRoutes;
