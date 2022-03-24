
import React, { Component } from 'react';
import '../css/Contact.css';
import ContactForm from './ContactForm';

class Contact extends Component {

 render() {
        return (
            <div className='contact'>
                <div className='contacth1'>
                    <h1>Contact</h1>
                </div>
                <div className='contactpage'>

                    <div className='contactlfet'>
                        <div className='contacth2'>
                            <h2>
                                SEND MESSAGE
                            </h2>
                            <div className='contacthr'> 
                                <hr className='contacthr'></hr>
                                <hr className='contacthr'></hr>
                            </div>
                        </div>
                        <div className='formdiv'>
                            <ContactForm/>
                        </div>
                    </div>


                    <div className='contactright'>
                        <div className='contacth2'>
                            <h2>
                                GET IN TOUCH
                            </h2>
                            <div className='contacthr'>
                                <hr className='contacthr'></hr>
                                <hr className='contacthr'></hr>
                            </div>
                        </div>

                        <div>
                            <h3 className='contactrighth3'>Phone:</h3>
                            <p className='phone'><a href="tel:3177646205">(317) 764-6205</a></p>
                        </div>

                        <div>
                            <h3 className='contactrighth3'>Email:</h3>
                            <p className='phone'><a href="mailto:lucyhu198977@gmail.com">lucyhu198977@gmail.com</a></p>
                        </div>

                        <div>
                            <h3 className='contactrighth3'>Fax:</h3>
                            <p>(317) 764-6205</p>
                        </div>

                        <div>
                            <h3 className='contactrighth3'>Address:</h3>
                            <p>116 N Main St</p>
                            <p>
                                New Bremen, Ohio 45869
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        );
    }
}
export default Contact;

