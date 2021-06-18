import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Assets from "./Assets";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Assets />
      <Footer />
    </Fragment>
  );
}

export default Layout;
