import type { NextPage } from 'next';
import Head from 'next/head';

// TODO: Usually the model will be imported from the models folder
interface Movie {
  name: string;
  year: number;
  rating: number;
}

interface <%= itemNamePascalCase %>Props {
  movies: Array<Movie>;
}

const <%= itemNamePascalCase %>: NextPage<<%= itemNamePascalCase %>Props> = ({
  movies,
}: <%= itemNamePascalCase %>Props) => {
  return (
    <div className="p-3">
      <Head>
        <title><%= itemNameCapitalCase %></title>
        <meta name="description" content="<%= itemNameCapitalCase %>" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-semibold mb-2"><%= itemNameCapitalCase %></h1>
      <p>{movies.length} movies</p>
    </div>
  );
};

export async function getServerSideProps() {
  const API_URL = process.env.API_URL;
  const resMovies = await fetch(`${API_URL}/top-10-movies`);
  const movies = await resMovies.json();

  return {
    props: {
      movies,
    },
  };
}

export default <%= itemNamePascalCase %>;
