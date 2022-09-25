import { Route, Routes } from 'react-router-dom';
import './App.css';
import PrimaryLayout from './layouts/PrimaryLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route path="productos" element={<h1>Productos</h1>} />
        <Route path="nosotros" element={<h1>Nosotros</h1>} />
        <Route index element={<h1>Home</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
