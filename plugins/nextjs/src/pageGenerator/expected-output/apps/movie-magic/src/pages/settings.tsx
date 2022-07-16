import type { NextPage } from 'next';
import Head from 'next/head';

// TODO: Usually the model will be imported from the models folder
interface Movie {
  name: string;
  year: number;
  rating: number;
}

interface SettingsPageProps {
  movies: Array<Movie>;
}

const SettingsPage: NextPage<SettingsPageProps> = ({
  movies,
}: SettingsPageProps) => {
  return (
    <div className="p-3">
      <Head>
        <title>Settings Page</title>
        <meta name="description" content="Settings Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-semibold mb-2">Settings Page</h1>
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

export default SettingsPage;
