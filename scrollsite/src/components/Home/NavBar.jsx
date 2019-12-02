import React from 'react';
import {Component} from 'react'
import {
    Link
  } from "react-router-dom";

export default class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div role="banner">
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand " href="index.html">Industrial</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse" id="navbarsExample05">
                    <ul className="navbar-nav pl-md-5 ml-auto">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="services.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown04">
                            <Link className="dropdown-item" to="/projects/drop1">Dropdown 1</Link>
                            <Link className="dropdown-item" to="/projects/drop2">Dropdown 2</Link>
                            <Link className="dropdown-item" to="/projects/drop3">Dropdown 3</Link>
                        </div>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
        
                    {/* <div className="navbar-nav ml-auto">
                        <form method="post" className="search-form">
                        <span className="icon ion ion-search"></span>
                        <input type="text" className="form-control" placeholder="Search...">
                        </form> */}
                    </div>
                    
                    </div>
                </div>
            </div>
         );
    }
}