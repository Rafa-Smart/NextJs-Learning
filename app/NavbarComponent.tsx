"use client";

// ini pneitng banget banget
// Di Next.js ada 2 sistem router:

// 1. next/router -> untuk Pages Router
// /pages -> jadinya semua page itu adalah client beda sama app bsia cinet aau server
// 2. next/navigation -> untuk App Router
// /app -> defaultnya adalha server component, jadi akalo mau pake use hoks itu harus pake use client

// jadi kan kita itu sekarnag pakenya app router bukan pages router
// pages itu berati root olernya adalah pages

// tapi kalo app router itu berati root foldernya adalh app

// dan kita itu ga boleh pake yang next/router tapi hraus pake next/navigation

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
export default function NavbarComponent() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <nav className="flex bg-gray-800 py-2 px-6 justify-between">
 
        <ul className="flex ml-5">
          <Link href={"/"}>
            <li
              className={`mr-3 text-white cursor-pointer`}
            >
              Navbar
            </li>
          </Link>
          <Link href={"/"}>
            <li
              className={`mr-3 ${pathname == "/" ? "text-blue-300" : "text-white"} cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li
              className={`mr-3 ${pathname == "/about" ? "text-blue-300" : "text-white"} cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href={"/about/profile"}>
            <li
              className={`mr-3 ${pathname == "/about/profile" ? "text-blue-300" : "text-white"} cursor-pointer`}
            >
              Profile
            </li>
          </Link>

          {/* nah gini nih maunya
          jadi saya inign agar saya bisa akses /login
          yang padahal folder login sebenernya ada di folder auth
          harusnya kan /auth/login, tapi saya maunya auth itu sebagai folder 
          pembungkus atau grouping saja gitu */}
          <Link href={"/login"}>
            <li
              className={`mr-3 ${pathname == "/login" ? "text-blue-300" : "text-white"} cursor-pointer`}
            >
              Login
            </li>
          </Link>
          <Link href={"/register"}>
            <li
              className={`mr-3 ${pathname == "/register" ? "text-blue-300" : "text-white"} cursor-pointer`}
            >
              Register
            </li>
          </Link>
        </ul>
        <div>


          {/* nah kalo button itu biasnaya kita pake useRouter untuk navigasi */}

          {/* nah ini juga sekalian ya, jaid sya iut maunya ketika saya lagi ada di /login atua /register saya itu ga mau nampilin navbarnya, nah gimana carnaya, caranya adalh lia aja di layout di root */}
          <button onClick={() => router.push('/login')} className="bg-white rounded-md px-3 text-blue-700 py-1 font-bold">
            Login
          </button>
        </div>
      </nav>
    </>
  );
}
