"use client";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const menu = [
    { name: "About", url: "/about" },
    { name: "Sign In", url: "/login" },
  ];
  const searchFunc = (e) => {
    if (e.key && e.key !== "Enter") return;

    if (keyword.trim().length >= 3) {
      router.push(`/search/${keyword}`);
    }

    setKeyword("");
  };

  return (
    <div className="flex items-center gap-5 h-20 p-5">
      <Link
        href="/"
        className="bg-amber-600 p-3 text-2xl font-bold rounded-xl"
      >
        MovieHUB
      </Link>
      <div className="flex flex-1 items-center text-2xl gap-2 border p-3 rounded-lg">
        <input
          type="text"
          onKeyDown={searchFunc}
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="outline-none flex-1 bg-transparent"
          placeholder="Search..."
        />
        <BiSearch
          className="cursor-pointer hover:text-blue-500"
          onClick={() => searchFunc({})}
          size={26}
        />
      </div>
      <ThemeComp />
      {menu.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Header;
