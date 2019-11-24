import React, { Component } from 'react'

import './deliver.css';

export default class Deliver extends Component {
    render() {
        return (
            <div>
                <div class="row" id="nav">
                    <div class="col-md-12">
                        <div class="row" id="h1">
                            <div class="col-md-2" id="logo">Total Cloud</div>
                            <div class="col-md-3" id="menu"></div>
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-2">
                                        <a href="#" >Home</a>  
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#" >About</a> 
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#">Fetures</a>
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#">Pricing</a>
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#">Screenshot</a>
                                    </div>
                                    <div class="col-md-2">
                                        <a href="#">Contact</a>
                                    </div>
                                </div>   
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                        <div class="row" id="h2">
                            <div class="col-md-3"></div>
                            <div class="col-md-6">
                                <h2>The Best App to Increase Your Productivity</h2>
                            </div>
                            <div class="col-md-3"></div>
                        </div>    
                    </div>
                </div>
                <div className="container card">
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-md-4">
                            <div className="mt-5 mb-5 card">
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img1.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                            Recharts 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img2.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                            Vectron 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img3.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                            Ayush 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img4.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                            Jhon 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img5.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                            Devid 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img5.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                            Milon 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img7.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                            Danny 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                                <button type="button" class="btn btn-info" value="Assign >>" id="but1">Assign >></button>
                                <br></br><br></br><button type="button" class="btn btn-primary" id="but2" value="<<">Revoke</button>
                        </div>
                        <div class="col-md-4">
                            <div className="mt-5 mb-5 card">
                            <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img1.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                        Recharts 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img2.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                        Vectron 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img3.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                        Ayush 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img8.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                            Sushant 
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <img src={require('./image/img9.jpg')} class="rounded-circle" alt="Cinque Terre"></img> 
                                    </div>
                                    <div class="col-md-4">
                                            Raushon 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </div>
            </div>
        )
    }
}

