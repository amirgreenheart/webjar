import classNames from "classnames";
import { ChangeEvent, ChangeEventHandler, SyntheticEvent } from "react";

export type Props = {
    categories: {
        isDeleted: boolean;
        name: string;
        _id: string;
    }[];
    onCategoryChange: (value: Set<string>) => void;
}

const set = new Set<string>();

export const Filters = ({ categories, onCategoryChange }: Props): JSX.Element => {


    const onChange = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
        const checked = (e.target as HTMLInputElement).checked;
        checked ? set.add(id) : set.delete(id);
        onCategoryChange(set);
    }

    return (
        <div className="flex-col items-start justify-start px-6 z-10 pt-8 pb-7 shadow-[0px_0px_30px_rgba(0,0,0,0.01)] sticky top-0 z-[20]">
            <div className="text-[22px] font-bold mb-7">دسته بندی </div>
            <ul>
                {categories.map((category,index) => {
                    return <li key={`blog-${index}`} className="mb-5">
                        <div className="w-full flex items-center justify-between">
                            <span className="text-[16px] text-[#7B7B7B]">
                                {category.name}
                            </span>
                            <input
                                onChange={onChange(category._id)}
                                className={classNames("checkboxList w-[23px] h-[23px]", "form-checkbox")}
                                type="checkbox"
                            />
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}