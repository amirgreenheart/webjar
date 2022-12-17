import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MobileHeader = (): JSX.Element => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="h-[64px] bg-[#1B2430] w-full flex items-center justify-between px-4 sticky top-0 z-[12]">
      <div className="flex items-center justify-between w-full">
        <Link prefetch={false} href="/">
          <span onClick={showSidebar} className="header-link">
            <Image
              src="/images/icons/logo.svg"
              alt="وبجار"
              width={50}
              height={23}
            />
          </span>
        </Link>
        <Image
          onClick={showSidebar}
          src="/images/icons/menu-icon.svg"
          alt="وبجار"
          width={20}
          height={22}
        />
      </div>
      <nav
        className={`bg-[#030303] h-screen w-[250px] fixed z-50  bottom-0 ease-in duration-300 overflow-y-scroll ${sidebar ? "right-0" : "right-[-250px]"
          }`}
      >
        <div className="mt-4 m-auto flex items-center w-full justify-center">
          <Image
            src="/images/icons/logo.svg"
            alt="وبجار"
            width={50}
            height={23}
          />
        </div>
        <ul className="px-6">
          <li className="text-white text-[16px] leading-10 mt-[10px]">
            <Link prefetch={false} href="/">
              <span className="header-link"> خانه </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileHeader;
