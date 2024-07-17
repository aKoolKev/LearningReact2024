import React, { useState, useEffect } from 'react';

function MyComponent2(){
    const[width,setWidth]=useState(window.innerWidth);
    const[height,setHeight]=useState(window.innerHeight);

    /* BAD IDEA! (spam add event listeners) */
    // window.addEventListener("resize", handleResize);
    // console.log("EVENT LISTENER ADDED"); //debug

    /* Best practice (only add event listener once) */
    useEffect( ()=> {
        //add event listener only when event mounts
        window.addEventListener('resize', handleResize);
        console.log("EVENT LISTENER ADDED");

        //return statement that handle any clean up
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }

    },[]);

    /* Can have more than one useEffect hook within a single React component */
    useEffect(()=>{
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}

export default MyComponent2;