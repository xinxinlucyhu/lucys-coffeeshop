import React, { Component } from 'react';
import Home from './Home';
import Menu from './Menu';
import About from './About';
import NavBar from './NavBar';
import { Route, Routes} from 'react-router-dom';
class App extends Component {
    render(){
      return(
        <div className="App" >
            <NavBar />
           
          <Routes>
            <Route name="Home" exact path="/" element={<Home/>}></Route>
            <Route name="Menu" path="/menu" element={<Menu/>}></Route>
            <Route name="About" path="/about" element={<About/>}></Route>
          </Routes>
        </div>
      );
    }
  }

  export default App;