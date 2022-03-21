import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';
import Specialdrinks from './Specialdrinks'
class Home extends Component {
  render() {
    return (

      <div className='homepage'>
        <div className='firstpart'>

          <h1>New Bremen Coffee.co</h1>
          <h2>A Big-Town Coffee House With a Small-Town Charm</h2>

        </div>
        <h2 className='drink'>Monthly Drink Specials</h2>
          <hr></hr>
         
        <div className='monthlyspecial'>
         
          <Specialdrinks />
          </div>
          <div className='aboutusparent'> 
        <div className='aboutus'>
          <h3>
            About Us
          </h3>
          <div className='clearfix'>
            <img className='aboutimg' src="https://1blybv4f6ltw36e3uz1tyfci-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/10888696_833501796708362_7873687529523419267_n.jpg"></img>
            Our Story
            New Bremen Coffee Co. and Books, Inc., opened in October of 1999 by five women involved in a reading group.  The group saw a need for a coffee house and bookstore in the area.  It has since evolved into a gourmet coffee shop serving daily breakfast and lunch.  Books from local authors are on hand and special order books are available upon request.

            The current owners of New Bremen Coffee Co. and Books, Inc., are dedicated to serving the freshest food and gourmet coffees.  They guarantee fair prices and a pleasing atmosphere for all customers.

            New Bremen Coffee Co. and Books, Inc., is located at 115 West Monroe in New Bremen, Ohio, just west of the intersection of State Routes 66 and 274.
          </div>
        </div>
        </div>
       <footer className='site-footer'>
         <div className='footertop'>
<div className='hours'>
<h5>Our Hours</h5>
<p>Monday, Tuesday, Wednesday, Friday</p>
<p>6 a.m. to 4 p.m.</p>
<p>Thursday</p>
<p>6 a.m. to 6 p.m.</p>
<p>Saturday</p>
<p>8 a.m. to 2 p.m.</p>
<p>Closed Sundays</p>
</div>
<div className='contact'>
<h5>Contact</h5>
<p>115 West Monroe</p>
<p>New Bremen, Ohio</p>
<p>45869</p>
<p>Phone: 111-222-3333</p>
<p>Fax: 111-222-4444</p>
<p>E-mail: <a className='build'  href="mailto:lucyhu198977@gmail.com">lucyhu198977@gmail.com</a></p>

</div>
</div>
<div className='companytag'>
  <p>@Lucy's Coffee Company 2022</p>
  <p ><a className='build' href="https://getbootstrap.com/docs/4.6/components/card/">Built by Lucy</a></p>
</div>

       </footer>

      </div>
    );
  }
}

export default Home;