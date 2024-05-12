import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// TODO: Usually the model will be imported from the models folder
interface Movie {
  name: string;
  year: number;
  rating: number;
}

type SettingsPageData = {
  movies: Array<Movie>;
};

export let loader: LoaderFunction = async () => {
  const API_URL = process.env.API_URL;
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  const movies = await resMovies.json();

  let data: SettingsPageData = {
    movies,
  };

  return json(data);
};

export default function SettingsPage() {
  const { movies } = useLoaderData<SettingsPageData>();

  return (
    <div className="p-3">
      <h1 className="text-2xl font-semibold mb-2">Settings Page</h1>
      <p>{movies.length} movies</p>
    </div>
  );
}
