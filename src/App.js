import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/reviews" element={<Reviews/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
