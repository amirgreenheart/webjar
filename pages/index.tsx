import { HomeComponent } from "@/page-component/Home"
import axios from "axios";
import {
  BreadCrumb
} from "@/components/section";
import { NextPageContext } from "next";
import { BlogsType } from "@/page-component/Home/components/Type/blog";

export type Props = {
  blogs: BlogsType[];
  categories: any[];
}

export default function Home({ blogs, categories }: Props) {

  const breadCrumbs = [
    {
      'item': '',
      'name': 'خانه',
    },
    {
      'item': '',
      'name': 'وبلاگ',
    },
  ]
  return (
    <div className="max-w-[1366px] mx-auto pt-4 pb-[22px]">
      <BreadCrumb breadCrumbs={breadCrumbs} />
      <HomeComponent blogs={blogs} categories={categories} />
    </div>
  )
}
const getBlogs = (category?: string) => {
  console.log('cate:', category)
  return axios.get("/posts", {
    params: {
      limit : 10
    }
  })
    .then(({ data }) => data)
}



const getCategories = () =>
  axios.get("/post-categories")
    .then(({ data }) => data)

export async function getServerSideProps(ctx: NextPageContext) {
  const { categories: filters } = ctx.query;
  const [
    blogs,
    categories
  ] = await Promise.all([
    getBlogs(filters),
    getCategories()
  ]);
  return {
    props: { blogs, categories },
  };
}