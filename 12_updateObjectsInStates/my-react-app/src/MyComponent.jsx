import React, {useState} from 'react';

function MyComponent(){
    const [car, setCar] = useState({year:2024 , 
                                    make:"Porsche",
                                    model:"Carrera"});


    function handleYearChange(event){
        // "..." is a spread operator that retains the previous properties of an object
        // we are working with PREVIOUS state of car
        setCar(c => ({...c, year: event.target.value}) );
    }

    function handleMakeChange(event){
        setCar(c => ({...c, make:event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...c, model:event.target.value}) );
    }

    return (
        <>
            <div>
                <p> Your favorite car is: {car.year} {car.make} {car.model}</p>
                <input type="number" value={car.year} onChange={handleYearChange} /> <br/>
                <input type="text" value={car.make} onChange={handleMakeChange} /> <br/>
                <input type="text" value={car.model} onChange={handleModelChange} /> <br/>
            </div>
        </>
    );
}

export default MyComponent