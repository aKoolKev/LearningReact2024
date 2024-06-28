function Button(){
    //callback with CONDITIONS [EX.2]
        // let count = 0;

        // const handleClick = (name) => {
        //     if (count < 3) {
        //         count++;
        //         console.log(`${name} you clicked me ${count} time/s`);
        //     }
        //     else{
        //         console.log(`${name} stop clicking me!`);
        //     }
        // } 


    //callback [EX.3]
    const handleClick = (e) => e.target.textContent = "OUCH! 🤕";



    // const handleClick2 = (name) => console.log(`${name} stop clicking me`); //template string [EX.1]

    return (
        // <button onClick={() => handleClick("Kevin")}> Click me 😃 </button> //[EX.2]

        <button onClick={ (e) => {handleClick(e)} }> Click me 😃 </button> //[EX.3]
    );
}

export default Button