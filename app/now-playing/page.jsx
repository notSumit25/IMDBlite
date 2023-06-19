import Link from "next/link"
import Image from "next/image"
import Movie from "../Movie";

const page = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`);
    const res = await data.json();

  return (
    <div className="grid gap-8 grid-cols-2 mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
  )
}

export default page
