import Link from "next/link";
import Image from "next/image";

export type Props = {
  breadCrumbs: {
    item: string;
    name: string;
  }[];
};
const BreadCrumb = (data: Props): JSX.Element => {
  return (
    <div className="my-[5px] mx-2 sm:mx-0">
      <ul className="flex items-center justify-start flex-wrap">
        {data.breadCrumbs?.map((breadcrumb, index) => (
          <li
            key={`breadcrumb-item-${index}`}
            className="flex items-center justify-center mb-[10px] md:mb-0"
          >
            <Link href={breadcrumb?.item || "#"}>
              <span className="text-[11px] sm:text-[13px] text-[#7C7B7B] flex items-center justify-center">
                {breadcrumb?.name || ""}
              </span>
            </Link>
            {data.breadCrumbs?.length !== index + 1 && (
               <Image
               className="mx-2"
               src="/images/icons/ch-left.svg"
               alt="وبجار"
               width={6}
               height={4}
             />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BreadCrumb;
