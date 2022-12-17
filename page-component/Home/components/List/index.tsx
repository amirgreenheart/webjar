import { Card } from "./card"
import { BlogsType } from "@/page-component/Home/components/Type/blog";
export type Props = {
    blogs: BlogsType[];
}

export const List = ({ blogs }: Props): JSX.Element => {
    return (
        <div className="flex flex-col my-10">
            {blogs.map((blog,index) => <Card key={`blog-${index}`} data={blog} />)}
        </div>
    )
}