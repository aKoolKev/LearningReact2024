/*
  conditional rendering = allow you to control what gets rendered
                          in your application based onn certain conditions
                          (show, hide, or change components)

*/

import UserGreeting from "./UserGreeting"

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Kevin Dong" />
    </>
  );
}

export default App
