import React from "react";
import Header from "./header/header";
export type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <div className={className}>{children}</div>
    </>
  );
};

export { Layout };
