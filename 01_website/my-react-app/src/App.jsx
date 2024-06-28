import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'


function App() {
  
  return(
    //enclosed in a "fragment" - can only return one element 
    <> 
      <Header/> 
      <Food/>
      <Food/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
