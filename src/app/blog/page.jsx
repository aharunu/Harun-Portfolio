import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="h-1/2 flex flex-col justify-center items-center font-bold text-white">
      <h1 className="text-3xl pb-10">Blog</h1>
      <div className="flex justify-center">
        <Link href="/blog1">
            <img
            src="/blog.jpg"
            alt="blog"
            className="h-[250px] w-[500px]"/>
            </Link>
      </div>
      <Link href="/blog1">Next.js ile Portfolio Oluşturma</Link>
    </div>
  );
};

export default BlogPage;
