import React, { Component } from 'react';
import '../css/Home.css';
import Specialdrinks from './Specialdrinks'

class Home extends Component {
  render() {
    return (

      <div className='homepage'>
        <div className='firstpart'>

          <h1>Lucy's Coffee.co</h1>
          <h2>A Big-Town Coffee House With a Small-Town Charm</h2>

        </div>
        <h2 className='drink'>Monthly Drink Specials</h2>
          <hr></hr>
         
        <div className='monthlyspecial'>
         
          <Specialdrinks />
          </div>
          <div className='aboutusparent'> 
        <div className='aboutus'>
          <h2>
            About Us
          </h2>
          <div className='clearfix'>
            <img className='aboutimg' src="https://1blybv4f6ltw36e3uz1tyfci-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/10888696_833501796708362_7873687529523419267_n.jpg" alt='coffee shop'></img>
            <h5 className='abouth5'>Our Story</h5>
            Lucy's Coffee Co. and Books, Inc., opened in October of 1999 by five women involved in a reading group.  The group saw a need for a coffee house and bookstore in the area.  It has since evolved into a gourmet coffee shop serving daily breakfast and lunch.  Books from local authors are on hand and special order books are available upon request.

            The current owners of New Bremen Coffee Co. and Books, Inc., are dedicated to serving the freshest food and gourmet coffees.  They guarantee fair prices and a pleasing atmosphere for all customers.

            New Bremen Coffee Co. and Books, Inc., is located at 115 West Monroe in New Bremen, Ohio, just west of the intersection of State Routes 66 and 274.
          </div>
        </div>
        </div>
      
      </div>
    );
  }
}

export default Home;