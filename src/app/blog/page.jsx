import Link from "next/link";

const BlogPage = () => {
  const blogs = [
    {
      title: "Next.js ile Portfolio Oluşturma",
      image: "/blog.jpg",
      url: "/nextjs-ile-portfoy-olusturma",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl px-8 pb-8 text-center text-white">
        Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Link href={blog.url} key={blog.title} className="w-full">
            <div className="flex flex-col items-center gap-2">
              <img src={blog.image} alt="" className="w-full rounded-md" />
              <h2 className="text-lg text-white bg-black p-2 rounded-md">
                {blog.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
