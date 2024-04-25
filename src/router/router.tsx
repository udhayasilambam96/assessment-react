import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import HomePage from "../pages/home";
import SliderPage from "../pages/slider";


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
