import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App-header">
      <div className='header'>
        <Navigation />
        <Header />
        {/* <Card /> */}
      </div>
    </div>
  );
}

export default App;
