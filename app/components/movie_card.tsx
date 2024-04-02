import Image from "next/image";
import React from "react";

interface Movie {
  title: string;
  poster_path: string;
}

interface Props {
  movie: Movie;
  onClick: () => void;
}

export default function MovieCard({ movie, onClick }: Props) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const truncatedTitle =
    movie.title.length > 30
      ? movie.title.substring(0, 30) + "..."
      : movie.title;

  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div>
        <Image
          src={imageUrl}
          alt={truncatedTitle}
          layout="responsive"
          width={50}
          height={100}
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-white text-xl text-center">{truncatedTitle}</h3>
    </div>
  );
}
