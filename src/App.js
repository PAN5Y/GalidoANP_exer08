/*
    Name: Galido, Alyanna Nicole P.
    Section: CMSC 100 - UV1L
    Description: This program contains App component.
*/

import './components/App.css';
import Header from './components/Header';
import Body from './components/Body';

/*
    The main component of the application. 
    It renders the header and body components.
*/

function App() {
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  )
}

export default App;

