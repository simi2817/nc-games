import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import SingleReview from './components/SingleReview';
import Users from './components/Users';
import Categories from './components/Categories';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="*" element={<ErrorPage/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/reviews" element={<Reviews/>}></Route>
        <Route path="/reviews/:review_id" element={<SingleReview/>}></Route>
        <Route path="/reviews/:review_id/comments" element={<SingleReview/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/categories" element={<Categories/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
