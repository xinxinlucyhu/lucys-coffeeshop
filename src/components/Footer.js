import React, { Component } from 'react';
import '../css/Footer.css';
class Footer extends Component {
  render() {

    return (

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
    )
  }
}
export default Footer;