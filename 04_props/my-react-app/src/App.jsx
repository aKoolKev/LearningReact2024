/* 
  props = read-only properties that are shared between components
          a parent component can send data to a child component.
          <Component key=value />

*/
           
import Student from './Student.jsx'

function App() {

  return (
    <>
      {/* Four Student components, passing in different values */}
      <Student name="Kevin Dong" age="21" isStudent={true} />
      <Student name="Erika Napier" age={21} isStudent={true} />
      <Student name="Frankie" age={100000} isStudent={false} />
      <Student name="Sappy" age={200} isStudent={false} />

      {/* defaultProps */}
      <Student  />
    </>
  );
}

export default App
