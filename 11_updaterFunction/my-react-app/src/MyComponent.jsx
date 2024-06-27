/*
  updater function = a function passed as an argument to setState() USUALLY
                     ex. setYear(year +1) -> setYear(arrow function)
                     Allow for safe updates and asynchronous functions.
                     Good practice to use updater functions
*/
import React, {useState} from 'react';


function MyComponent (){

    const [count, setCount] = useState(0);

    function increment(){
        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.
        // setCount(count+1); (0+1)
        // setCount(count+1); (0+1)
        // setCount(count+1); (0+1)


        // Takes the PENDING state to calculate the NEXT state.
        // React puts your updater function in a queue
        // During the next render, it will call them in the same order.
        setCount(c => c + 1); //(0+1)
        setCount(c => c + 1); //(1+1)
        setCount(c => c + 1); //(2+1)
    }

    function decrement(){
        // setCount(count-1);
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    function reset(){
        setCount(0);
    }

    return (<> 
        <p>Count: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
    </>);
}

export default MyComponent