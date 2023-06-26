import { HomePage } from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
    </Routes>
  );
}
