import React from "react";
import Footerbar from "../../components/Footerbar";
import NavbarComponent from "../../components/NavbarComponent";

const Layout = (props) => {
  return (
    <>
      <NavbarComponent />
      {props.children}
      <Footerbar/>
    </>
  );
};

export default Layout;
