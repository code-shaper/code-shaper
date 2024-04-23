import { AppHeader } from './components/AppHeader';
import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </>
  );
}
