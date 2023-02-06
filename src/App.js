import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
