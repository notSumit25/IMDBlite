import Image from "next/image";

const MovieDetails = async ({ params }) => {
  const { movie } = params;
  const imagePath = 'https://image.tmdb.org/t/p/original';
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
  const res = await data.json();
  console.log(res);

  return (
    <div className="container mx-auto px-4">
      <div className="my-12 mx-auto max-w-lg">
        <Image
          className="w-full h-full object-cover"
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          alt={res.title}
        />
        <h2 className="text-3xl font-bold mt-6">{res.title}</h2>
        <p className="text-gray-600 mb-4">{res.release_date}</p>
        <p className="text-gray-600">RunTime: {res.runtime} minutes</p>
        <p className="text-gray-600 mt-2">Rating: {res.vote_average}/10</p>
        <h2 className="inline-block mt-4 px-3 py-1 bg-green-500 text-white text-sm">
          {res.status}
        </h2>
        <p className="mt-6">{res.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
