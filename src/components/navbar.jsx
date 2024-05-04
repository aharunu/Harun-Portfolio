"use client"
import Link from "next/link"
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";

const links = [
    { url: "/", title: "Home" },
    { url: "/blog", title: "Blog" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/about", title: "About" },
    { url: "/contact", title: "Contact" }
];

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            { /* LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map(link => (
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            { /* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center xl:items-center">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">Harun</span>
                    <span className="w-10 h-6 bg-white text-black rounded flex items-center justify-center">Dev</span>
                </Link>
            </div>
            { /* SOCIAL */}
            <div className="hidden md:flex gap-4 w-1/3 justify-end">
                <Link href="https://github.com/aharunu">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/ahmet-harun-alti">
                    <Image src="/linkedin_black.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* RESPONSIVE MENU */}
            {open && <div className="md:hidden lg:hidden xl:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
                    { /* TODO: ADD CLOSE BUTTON - CROSS BUTTON */}
                    <div className="w-10 h-1 bg-red-500 rounded"></div>
                    <div className="w-10 h-1 bg-red-500 rounded"></div>
                    <div className="w-10 h-1 bg-red-500 rounded"></div>
                </button>
                {open && (
                    <div className="absolute top-16 right-4 bg-white p-4 rounded-md shadow-md flex flex-col gap-4 z-50">
                        {links.map((link) => (
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
                    </div>
                )}
            </div>}
            {!open && <div className="md:hidden lg:hidden xl:hidden">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={(() => setOpen(!open))}>
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                    <div className="w-10 h-1 bg-black rounded"></div>
                </button>
            </div>}
        </div>
    );
};

export default Navbar