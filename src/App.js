import logo from './logo.svg';
import Header from './component/Header';
import Banner from './component/Banner';
import './App.css'
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <div class="app-header">
        <Header />
      </div>
      <div class="app-banner">
        <Banner />
      </div>
      <div class="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
