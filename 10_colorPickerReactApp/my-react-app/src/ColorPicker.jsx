import React, {useState} from 'react' //import useState hook

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1> Color Picker</h1>

            {/* Need to enclose css properties with {} */}
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color : {color} </p>
            </div>
            
            <label>Select a color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
            
        </div>
    );
}

export default ColorPicker