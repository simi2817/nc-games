import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';

function App() {

  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/reviews/:review_id" element={<SingleReview/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
