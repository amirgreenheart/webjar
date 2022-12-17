import Button from "@/components/ui/tailwind/Button";
import Image from "next/image";


export type Props = {
    data: { title: string; body: string; author: string }
}

export const Card = ({ data }: Props): JSX.Element => {
    return (
        <div className="sm:flex-row flex flex-col mb-24">
            <div className="relative shrink-0 flex sm:items-start sm:justify-start items-center justify-center w-full sm:w-[301px] h-[288px] rounded-[12px] lg:h-[288px]">
                <Image
                    src="/images/blog/blogImage.svg"
                    alt="تصویر وبلاگ"
                    layout="fill"
                    priority={true}
                />
            </div>
            <div className="flex flex-col items-start justify-between sm:mr-12 w-full">
                <div className="flex-col sm:items-start sm:justify-start px-14 sm:px-0 sm:pt-0 pt-5">
                    <h2 className="mb-5 font-semibold sm:text-[18px] text-[14]">{data.title}</h2>
                    <p className="leading-[45px] sm:text-[16px] text-[12px] line-clamp-3 mb-5 sm:w-3/4">{data.body}</p>
                </div>
                <div className="sm:flex sm:flex-row flex-col items-center justify-between w-full">
                    <div className="flex items-center justify-center gap-7 sm:gap-0 sm:justify-start">
                        <div className="flex items-center justify-center sm:ml-12">
                            <Image
                                src="/images/icons/calendar.svg"
                                alt="تاریخ"
                                width={16}
                                height={16}
                            />
                            <div className="shrink-0 sm:text-[14px] text-[11px] mr-2 mt-1">20 اردیبهشت 1400</div>
                        </div>
                        <div className="flex items-center justify-center sm:ml-12">
                            <Image
                                src="/images/icons/calendar.svg"
                                alt="تاریخ"
                                width={16}
                                height={16}
                            />
                            <div className="shrink-0 sm:text-[14px] text-[11px] mr-2 mt-1">10 نظر</div>
                        </div>
                        <div className="flex items-center justify-center sm:ml-12">
                            <Image
                                src="/images/icons/calendar.svg"
                                alt="تاریخ"
                                width={16}
                                height={16}
                            />
                            <div className="shrink-0 sm:text-[14px] text-[11px] mr-2 mt-1">{data.author}</div>
                        </div>
                    </div>
                    <div className="sm:mx-0 mx-5">
                        <Button size="sm" className="bg-allowGreen text-white w-full sm:mt-0 mt-7 sm:w-[107px] text-[13px] rounded-[15px]">
                            بیشتر
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}