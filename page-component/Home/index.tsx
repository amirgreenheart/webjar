import { List } from "./components/List"
import { Filters } from "./components/Filters"
import { Search } from "./components/Search"
import { Pagination } from "./components/Paginate"
import { useState } from "react"
import { useRouter } from "next/router";
import { BlogsType } from "@/page-component/Home/components/Type/blog";
export type Props = {
    blogs: BlogsType[];
    categories: {
        isDeleted: boolean;
        name: string;
        _id: string;
    }[];
}

export const HomeComponent = ({ blogs, categories }: Props): JSX.Element => {
    const router = useRouter();
    const [result, setResult] = useState<Props['blogs']>(blogs);

    const onSearchedValue = (value: string) => {
        const searchResult = blogs.filter(blog => blog.title.includes(value));
        setResult(searchResult)
    }

    const onCategoryChange = (set: Set<string>) => {

        const filters = {
            ...router.query,
            categories: Array.from(set),
        };
        router.push({
            pathname: "/",
            query: filters,
        });
    }
    return (
        <>
            <h1 className="w-full flex justify-center text-[24px] items-center font-extrabold">
                وبلاگ
            </h1>
            <Search searchedValue={onSearchedValue} />
            <div className="flex md:flex-row flex-col mt-5">
                <div className='md:w-3/12 w-full'>
                    <Filters categories={categories} onCategoryChange={onCategoryChange} />
                </div>
                <div className='md:w-9/12 w-full'>
                    <List blogs={result} />
                </div>
            </div>
            <Pagination />
        </>
    )
}
