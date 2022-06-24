import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Candidates from './pages/Candidates';
import Candidate from './pages/Candidate';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/user' element={<Dashboard />} />
      <Route path='/:oid/candidates' element={<Candidates />} />
      <Route path='/registercan' element={<Candidate />} />
    </Routes>
  );
}

export default App;
