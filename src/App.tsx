import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import MainPage from '@/pages/MainPage';
import NotFound from './pages/NotFound';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ProductPage from './pages/ProductPage';
import DetailPage from './pages/DetailPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<DetailPage />} />
          </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
