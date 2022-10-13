import React from "react";
import Footerbar from "../../components/Footerbar";
import Navbar from "../../components/Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footerbar/>
    </>
  );
};

export default Layout;
