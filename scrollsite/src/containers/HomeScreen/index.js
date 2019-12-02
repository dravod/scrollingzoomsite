import React from 'react';
import {Component} from 'react'
import Slider from "../../components/Home/Slider";
import HomeBody from "../../components/Home/HomeBody"

export default class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Slider/>
                <HomeBody/>
            </div>
         );
    }
}