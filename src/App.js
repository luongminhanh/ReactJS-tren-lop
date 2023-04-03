import { useState } from 'react';
import './App.css'
import Example from './components/useEffect/Example';

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <div>
      <Example />
    </div>
  )
}

export default App;
