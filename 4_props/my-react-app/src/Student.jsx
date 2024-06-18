/*
    propTypes = a mechanism that ensures that the passed value
                is of the correct datatype.
                age: PropTypes.number
*/
import propTypes from 'prop-types'
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    isStudent: propTypes.bool
}

/*
    defaultProps = default values for props in case they are not
                   passed from the parent component
                   name: "Guest"
*/

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

function Student (props ){
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}



export default Student