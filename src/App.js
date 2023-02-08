import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';
import Users from './components/Users';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="/"></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/reviews/:review_id" element={<SingleReview/>}></Route>
        <Route path="/reviews/:review_id/comments" element={<SingleReview/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
