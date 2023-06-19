import Link from "next/link";
import Image from "next/image";

const Movie = ({ title, id, poster_path, release_date }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original';

  return (
    <div className="bg-inherit rounded-lg shadow-md p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <h2 className="text-gray-500 text-sm">{release_date}</h2>
      <Link href={`/${id}`}>
          <Image
            src={imagePath + poster_path}
            width={500}
            height={500}
            alt={title}
            className="rounded-lg"
          />
      </Link>
    </div>
  );
};

export default Movie;
