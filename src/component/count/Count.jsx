import React, { useState } from 'react'

const Count = () => {
    const handleClick = () => setCount(count + 1);
    const handleOver = () => {
        setCount(prevState => prevState + 2)
        setCount(prevState => prevState + 2)
        setCount(prevState => prevState + 2)
    }
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You click {count} times</p>
            <button onMouseOver={handleOver} onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Count