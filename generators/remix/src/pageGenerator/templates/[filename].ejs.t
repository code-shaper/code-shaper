import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// TODO: Usually the model will be imported from the models folder
interface Movie {
  name: string;
  year: number;
  rating: number;
}

type <%= itemNamePascalCase %>Data = {
  movies: Array<Movie>;
};

export let loader: LoaderFunction = async () => {
  const API_URL = process.env.API_URL;
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  const movies = await resMovies.json();

  let data: <%= itemNamePascalCase %>Data = {
    movies,
  };

  return json(data);
};

export default function <%= itemNamePascalCase %>() {
  const { movies } = useLoaderData<<%= itemNamePascalCase %>Data>();

  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold mb-2"><%= itemNameCapitalCase %></h1>
      <p>{movies.length} movies</p>
    </div>
  );
}
