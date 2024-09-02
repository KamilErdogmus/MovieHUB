"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Movies = ({ item }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${item?.id}`)}
      className="min-w-[470px] relative ImgContainer cursor-pointer z-10"
    >
      <Image
        width={470}
        height={300}
        className="rounded-lg object-contain"
        src={`https://image.tmdb.org/t/p/original/${
          item?.poster_path
            ? item?.poster_path
            : item?.backdrop_path
        }`}
        alt={item?.title || "Movie image"}
        loading="lazy"
      />

      <div className="absolute bottom-0 p-3 w-full h-full border flex flex-col justify-end opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-t from-black via-transparent to-transparent">
        <p className="text-2xl font-bold text-white">
          {item?.title}
        </p>
        <p className="text-white">
          {item?.overview.length > 150
            ? item?.overview.substring(0, 150) + "..."
            : item?.overview}
        </p>
      </div>
    </div>
  );
};

export default Movies;
