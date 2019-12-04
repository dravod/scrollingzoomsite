import React from 'react';
import {Component} from 'react'
import Slider from "../../components/Home/Slider";
import HomeBody from "../../components/Home/HomeBody"
import ProjectCarousel from '../../components/Carousel'
import FadeIn from '../../components/FadeIn'

export default class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {ProjectCarousel()}
                <Slider/>
                <FadeIn/>
                <HomeBody/>
            </div>
         );
    }
}