import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import TopBanner from "../TopBanner/TopBanner";

const Header = () => {
  return (
    <div className="container">
      <NavigationBar></NavigationBar>
      <TopBanner></TopBanner>
    </div>
  );
};

export default Header;
