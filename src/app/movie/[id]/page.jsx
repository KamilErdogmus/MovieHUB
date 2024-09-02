import Image from "next/image";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=81dcba790d7afcdbb3210d79fb5312bf`
  );

  return await res.json();
};

const Page = async ({ params }) => {
  const movieDetail = await getMovie(params.id);
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        className="rounded-lg"
        alt={`${movieDetail?.title}-logo`}
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
      />

      <div className="absolute text-white">
        <h2 className="font-bold text-4xl my-3">
          {movieDetail?.title}
        </h2>
        <p className="w-1/2">{movieDetail.overview}</p>

        <button className="border w-32 p-3 rounded-md text-center text-lg my-2 hover:bg-white hover:text-black font-bold">
          Trial
        </button>
      </div>
    </div>
  );
};

export default Page;
