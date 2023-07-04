import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/components/Home";

type Props = {};

const MainRoutes = (props: Props) => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default MainRoutes;
