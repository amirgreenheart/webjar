import Image from "next/image";
export const Pagination = (): JSX.Element => {
    return (
        <div className="w-full flex items-center justify-center">
            <ul className="flex">
                <li className="shadow-[0px_0px_10px_rgba(0,200,83,0.1)] shrink-0 items-center justify-center flex w-[30px] cursor-pointer mx-0.5 text-[13px] h-[30px] text-allowGreen rounded-[8px]">
                    <Image
                        src="/images/icons/arrow.svg"
                        alt="قیمت روز آهن آلات و مواد صنعتی اولیه"
                        width={7}
                        height={16}
                    />
                </li>
                <li className="w-[30px] cursor-pointer mx-0.5 text-[13px] h-[30px] text-allowGreen items-center justify-center flex border border-allowGreen rounded-[8px]">1</li>
                <li className="shadow-[0px_0px_10px_rgba(0,200,83,0.1)] shrink-0 items-center justify-center flex w-[30px] cursor-pointer mx-0.5 text-[13px] h-[30px] text-allowGreen rotate-[180deg] rounded-[8px]">
                    <Image
                        src="/images/icons/arrow.svg"
                        alt="قیمت روز آهن آلات و مواد صنعتی اولیه"
                        width={7}
                        height={16}
                    />
                </li>
            </ul>
        </div>
    )
}