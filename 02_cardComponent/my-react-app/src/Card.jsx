import profilePic from "./assets/me.jpeg"

function Card(){

    return (
        //class is a keyword in React
        <div className="card">

            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Kevin Dong</h2>
            <p className="card-text">
                I am a LU student, studying Computer Science. 
                I enjoy playing musical instruments in my free time
            </p>
        </div>
    );
}

export default Card