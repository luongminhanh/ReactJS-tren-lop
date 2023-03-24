import './App.css'
import Student from './components/testCssModule/Student';
import Teacher from './components/testCssModule/Teacher';
import FeatureItem from './components/feature/FeatureItem';
import FeatureList from './components/feature/FeatureList';
import Game from './components/tictactoe/Game';
import Toggle from './components/toggle/Toggle';
import TestSass from './components/testSass/TestSass';

function App() {
  return (
    <div className="App">
      <FeatureList/>
      <Toggle/>
      <TestSass/>
      <Student/>
      <Teacher/>
    </div>
  );
}

export default App;
