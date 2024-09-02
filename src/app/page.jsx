import Movies from "@/components/Movies";

const page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre
        ? "movie/" + searchParams.genre
        : "trending/all/day"
    }?api_key=81dcba790d7afcdbb3210d79fb5312bf&language=en-us&page=1`,
    { next: { revalidate: 1000 } }
  );

  const data = await res.json();
  return (
    <div className="flex items-center justify-center gap-5 flex-wrap">
      {data?.results?.map((item) => (
        <Movies key={item.id} item={item} />
      ))}
    </div>
  );
};

export default page;
