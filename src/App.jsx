import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Story from './components/Story';
import Gallary from './components/Gallary';
import { useRef } from 'react';
import { scrollTo } from './utils/scrollTo';

function App() {
  const ref = useRef({})
  const scrollToView = (element)=>{
      // ref.current[element].scrollToView();
      if(!ref.current[element]) alert('under construction.')
    
      scrollTo(ref.current[element].offsetTop)
  }
  return (
    <div className="App">
          <NavBar scrollToView={scrollToView}/>
          <Home reference={ref}/>
          <Story reference={ref}/>
          <Gallary reference={ref}/>
    </div>
  );
}

export default App;
