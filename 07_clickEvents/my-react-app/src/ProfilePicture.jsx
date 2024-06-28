function ProfilePicture (){
    const imageUrl = './src/assets/me.jpeg';
    
    const handleClick = (e) => e.target.style.display = "none"; //hide image on click [EX.2]
    // const handleClick = () => console.log("OUCH!"); // [EX.1]

    // return (<img onClick={handleClick} src={imageUrl}></img>) //[EX.1]
    return (<img onClick={(e)=>handleClick(e)} src={imageUrl}></img>); //[EX.2]
}

export default ProfilePicture