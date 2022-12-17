import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Button from "@/components/ui/tailwind/Button";
const DesktopHeader = (): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <div className="h-[70px] bg-white shadow-[0px_0px_40px_rgba(0,0,0,0.05)] sticky top-0 z-[20]">
        <div className="max-w-[1366px] h-full mx-auto w-full flex items-center justify-between">
          <div className="flex h-full items-center justify-center pl-40">
            <Link prefetch={false} href="/">
              <span className="flex h-full items-center justify-center header-link">
                <Image
                  src="/images/icons/logo.svg"
                  alt="وبجار"
                  width={67}
                  height={53}
                />
              </span>
            </Link>
          </div>
          <nav className="flex justify-between items-center w-full h-full desktopNav">
            <ul className="flex h-full items-center">
              <li className={classNames("h-full items-center flex justify-center text-[14px] min-w-[120px]", router.pathname == "/" && "border-b border-allowGreen border-b-[3px]")}>
                <Link href="/">
                  <span className={classNames("header-link", router.pathname == "/" && "text-allowGreen")}>خانه</span>
                </Link>
              </li>
            </ul>
            <div className="flex items-center justify-end">
              <Button size="sm" className="border border-allowGreen text-[red] px-11 py-2 text-[13px] rounded-[15px]">
                ورود
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default DesktopHeader;
