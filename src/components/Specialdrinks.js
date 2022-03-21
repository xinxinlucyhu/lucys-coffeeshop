import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
  import '../css/Specialdrinks.css';
class Specialdrinks extends Component {
    render() {
        return (

            <div>
                <h3>March 2022</h3>
                <div className='threeitems'>
                    <div className="card" >
                            <img src="https://1blybv4f6ltw36e3uz1tyfci-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/generic-frap-768x768.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                        <h5 className="card-text">Almond Joy Frappuccino</h5>
                        <p>$3.75 - $4.25</p>
                    </div>
                    </div>

                    <div className="card" >
                            <img src="https://1blybv4f6ltw36e3uz1tyfci-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/latte.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                        <h5 className="card-text">Lucky Charm Latte</h5>
                        <p>$3.75 - $4.25</p>
                    </div>
                    </div>

                    <div className="card" >
                            <img src="https://1blybv4f6ltw36e3uz1tyfci-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/cappuccino-768x768.jpg" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                        <h5 className="card-text">Pot O'Gold cappuccino</h5>
                        <p>$3.75 - $4.25</p>
                    </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Specialdrinks;