import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Image */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/herooo.png" alt="" fill className="object-contain"/>
      </div>
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      {/* Text */}
      <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 gap-8 items-center justify-center pl-8">
        {/* Baslik */}
        <h1 className="text-4xl md:text-6xl font-bold text-white">Harun&apos;s Portfolio</h1>
        {/* Aciklama */}
        <p className="md:text-xl text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Rerum quisquam saepe, officia adipisci consequatur expedita, 
          tempore et, quidem sunt iusto aliquid eaque. 
          Dolore error repellendus dicta excepturi labore libero ipsa!</p>
        {/* Button */}
        <div className="flex gap-4 w-full">
          <Link href="/portfolio">
            <button className="p-4 rounded-lg ring-2 ring-black bg-black text-white">View My Work</button>
          </Link>
          <Link href="/contact">
            <button className="p-4 rounded-lg ring-2 ring-black bg-black text-white">Contact Me</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
