import './App.css';
import NavBar from './components/NavBar';
import MyComponent from './components/MyComponent.';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  console.log('Hola esto esta funcionando :)');
  const value = 100;
  return (
<>
    <NavBar> NavBar</NavBar>
    <MyComponent name='coder' value ={value} />
    <MyComponent name='house' value ={200} />
</>
  );
}

export default App;
