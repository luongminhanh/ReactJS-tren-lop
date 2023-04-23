import { useEffect, useRef, useState } from 'react';
import './App.css'
import Photos from './components/useEffect/Photos';
import UserList from './components/useEffect/userLists/UserList';
import UseRef from './components/learnUseRef/UseRef';
import Form from './components/form/Form';
import SignUpForm from './components/form/SignUpForm';

function App() {
  // const countRef = useRef(0)
  // // const [count, setCount] = useState(0);
  // const handle = () => {
  //   const updateCount = countRef.current + 1;
  //   console.log(`Clicked ${updateCount} times`);
  //   // setCount(updateCount);
  //   countRef.current++;
  // }
  // console.log("Render")
  // const timerRef = useRef(null);
  // const [count, setCount] = useState(0);
  // const handleStart = () => {
  //   if (timerRef.current) return;
  //   timerRef.current = setInterval(() => {
  //     setCount((counter) => counter + 1);
  //   }, 1000)
  // }
  // const handleStop = () => {
  //   clearInterval(timerRef.current);
  //   timerRef.current = null;
  // }

  // useEffect(() => {
  //   return () => {
  //     clearInterval(timerRef.current);
  //     console.log('abc')
  //   }
  // }, [])
  return (
    // <div className='text-center content-cener m-auto'>
    //   <h3>
    //     Timer: {count}s
    //   </h3>
    //   <div>
    //     <button onClick={handleStart}>Start</button>
    //     <button onClick={handleStop}>Stop</button>
    //   </div>
    // </div>
    <div>
      <SignUpForm/>
    </div>
  )
}

export default App;
