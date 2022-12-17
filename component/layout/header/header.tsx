import dynamic from "next/dynamic";
import React from "react";
import withSizes from "react-sizes";

const DesktopHeader = dynamic(() => import("./DesktopHeader"));
const MobileHeader = dynamic(() => import("./MobileHeader"));

const Header = (props: any) => {
  const { isMobile } = props;
  return (
    <div>
      <div className="sm:hidden"><MobileHeader /></div>
      <div className="hidden sm:block"><DesktopHeader /></div>
    </div>
  );
};

const mapSizesToProps = ({ width }: any) => ({
  isMobile: width < 600,
});

export default withSizes(mapSizesToProps)(Header);
