import './App.css'
import FeatureList from './components/feature/FeatureList';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Slide from './components/slide/Slide';
// import Student from './components/testCssModule/Student';
// import Teacher from './components/testCssModule/Teacher';
// import FeatureItem from './components/feature/FeatureItem';
// import FeatureList from './components/feature/FeatureList';
// import Game from './components/tictactoe/Game';
// import Toggle from './components/toggle/Toggle';
// import TestSass from './components/testSass/TestSass';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <FeatureList/>
      <Slide/>
      <Footer/>
    </div>
  );
}

export default App;
