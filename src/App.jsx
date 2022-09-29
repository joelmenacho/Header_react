import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import PrimaryLayout from './layouts/PrimaryLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route path="productos" element={<h1>Productos</h1>} />
          <Route path="nosotros" element={<h1>Nosotros</h1>} />
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Provider>
  );
};

export default App;