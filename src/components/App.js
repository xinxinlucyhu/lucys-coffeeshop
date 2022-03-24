import React, { Component } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import Events from './Events';
import Order from './Order';
import { Route, Routes} from 'react-router-dom';
class App extends Component {
    render(){
      return(
        <div className="App" >
            <NavBar />
           
          <Routes>
            <Route name="Home" exact path="/" element={<Home/>}></Route>
            <Route name="Menu" path="/menu" element={<Menu/>}></Route>
            <Route name="Contact" path="/contact" element={<Contact/>}></Route>
            <Route name="Events" path="/events" element={<Events/>}></Route>
            <Route name="Order" path="/order" element={<Order/>}></Route>
          </Routes>
          <Footer/>
        </div>
      );
    }
  }

  export default App;