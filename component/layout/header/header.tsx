import dynamic from "next/dynamic";
import React from "react";

const DesktopHeader = dynamic(() => import("./DesktopHeader"));
const MobileHeader = dynamic(() => import("./MobileHeader"));

const Header = () => {
  return (
    <div>
      <div className="sm:hidden"><MobileHeader /></div>
      <div className="hidden sm:block"><DesktopHeader /></div>
    </div>
  );
};

export default Header;
