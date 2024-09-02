import Movies from "@/components/Movies";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=81dcba790d7afcdbb3210d79fb5312bf&query=${keyword}&language=en-US&include_adult=false`
  );

  const data = await res.json();
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {!data?.results ? (
        <div>
          The movie you are looking for could not be found.
        </div>
      ) : (
        data?.results.map((item) => (
          <Movies key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default Page;
