"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const tabs = [
    { name: "Popular", url: "popular" },
    { name: "Top Rated", url: "top_rated" },
    { name: "Upcoming", url: "upcoming" },
  ];

  return (
    <Suspense>
      <div className="py-5 m-5 bg-gray-100 dark:bg-gray-900 flex justify-center items-center gap-7">
        {tabs.map((item) => (
          <Link
            key={item.url}
            href={`/?genre=${item.url}`}
            className={`cursor-pointer hover:opacity-75 transition-opacity ${
              genre === item.url
                ? "font-bold underline underline-offset-8 text-blue-600"
                : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </Suspense>
  );
};

export default Tabs;
