import logo from './logo.svg';
// import './App.css';
import Card from './component/Card';
import Header from './component/Header';
import Count from './component/count/Count';
import YoutubeItem from './component/youtube/YoutubeItem';
import YoutubeList from './component/youtube/YoutubeList';
import Button from './component/button/Button';

function App() {
  return (
    <div className="App">
      <Header/>
      <Count/>
      <YoutubeList/>
      <Button>Đăng ký</Button>
    </div>
  );
}

export default App;
