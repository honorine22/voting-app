import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Dashboard />} />
    </Routes>
  );
}

export default App;
