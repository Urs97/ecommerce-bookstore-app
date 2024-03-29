import React from "react";
import "./AppLayout.scss";

import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const AppLayout = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default AppLayout;
