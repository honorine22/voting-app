import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import ViewCandidates from './pages/ViewCandidates';
import Candidate from './pages/Candidate';
import ViewCanDetails from './components/ViewCanDetails';
import Navigation from './components/Navigation';
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<Dashboard />} />
        <Route path='/:oid/candidates' element={<ViewCandidates />} />
        <Route path='/:oid/candidates/:cid' element={<ViewCanDetails />} />
        <Route path='/registercan' element={<Candidate />} />
      </Routes>
    </Provider>
  );
}

export default App;
