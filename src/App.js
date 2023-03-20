import './App.css'
import FeatureItem from './component/feature/FeatureItem';
import FeatureList from './component/feature/FeatureList';
import Game from './component/tictactoe/Game';
import Toggle from './component/toggle/Toggle';

function App() {
  return (
    <div className="App">
      <Toggle />
      <FeatureList />
      <Game />
    </div>
  );
}

export default App;