// import styles from './Button.module.css' //2. Modules CSS

function Button(){

    //3. Inline CSS
    const inlineStyles = {
        backgroundColor: "hsl(200,100%,50%)",
        color: "white",
        padding:"10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    return(
        // <button className="button">Click me</button>  //1. External CSS
        // <button className={styles.button}> Click me </button> //2. Modules CSS
        <button style={inlineStyles}>Click me</button> //3. Inline CSS

    );
}

export default Button