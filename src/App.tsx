import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Header from "./sheared/header/Header";
import Popup from "./sheared/Popup/Popup";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="globalContainer">
      {/* <Popup /> */}
      <div className="container">
        <Header />
        <MainRoutes />
      </div>
    </div>
  );
};

export default App;
