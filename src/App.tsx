import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import MainPage from '@/pages/MainPage';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
};

export default App;
