import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Container } from "@mui/material";

const AppLayout = (props) => {
  const { children, isHeader = false, isBottomNav = false } = props;

  return (
    <React.Fragment>
      {isHeader && <Header />}
      {children}
      {isBottomNav && <Footer />}
    </React.Fragment>
  )
};

export default AppLayout;
