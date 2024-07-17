import React, { useState, useEffect } from 'react';

function DigitalClock(){
    const[time,setTime]=useState(new Date());

    // Start time when we mount (ONCE)
    useEffect(()=>{
        const intervalID = setInterval( ()=>{
            setTime(new Date());
        }, 1000);

        //clean-up function
        return () => {
            clearInterval(intervalID);
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        //meridium: AM/PM
        const meridiem = hours >= 12 ? "PM" : "AM";

        // if hours = 12...12%12 = 0 ... false => 12 
        // || returns the first truthy value ... 0||12 = false || 12... 12 is the first truthy => return 12
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className='clock-container'>
            <div className='clock'>
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;