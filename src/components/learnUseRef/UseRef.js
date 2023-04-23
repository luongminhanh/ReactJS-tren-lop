import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const divRef = useRef(0);
    const countRef = useRef(0);
    const handleClick = () => {
        const updateCount = countRef.current + 1;
        console.log(updateCount);
        countRef.current++;
    }
    useEffect(() => {
        divRef.current.style.backgroundColor = "red";
    }, [])
    return (
        <div>
            <div onClick={handleClick}>You click {countRef.current} times</div>
            <div className='text-white bg-black' ref={divRef}>
                aa
            </div>
        </div>
    )
}

export default UseRef