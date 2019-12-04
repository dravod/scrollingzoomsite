import React from 'react';
import {Component} from 'react'
import Slider from "../../components/Home/Slider";
import HomeBody from "../../components/Home/HomeBody"
import ProjectCarousel from '../../components/Carousel'

export default class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {ProjectCarousel()}
                <Slider/>
                <HomeBody/>
            </div>
         );
    }
}