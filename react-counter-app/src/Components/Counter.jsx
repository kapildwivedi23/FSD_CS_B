import React, { useEffect,useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    function handleIncrement(){
        setCount(count+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }
    useEffect(()=>{
        setCount1(count*10)
    })
return (
    <div className='counter'>
    <h1>Counter App</h1>
    <h1 className='c1'>Counter:{count}</h1>
    <h1 className='c2'>Counter1:{count1}</h1>
    <button className="b1" onClick={handleIncrement}>Increment</button>
    <button className='b2' onClick={handleDecrement}>Decrement</button>
    </div>
)
}

export default Counter