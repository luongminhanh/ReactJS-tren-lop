import { Route, Router, Routes } from 'react-router';
import './App.css'
import FeatureList from './components/feature/FeatureList';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Slide from './components/slide/Slide';
import Login from './components/Login';
import SignIn from '../src/components/page/SignIn'
import Home from './components/page/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<SignIn />}></Route>

      </Routes>
    </div>
  );
}

export default App;
