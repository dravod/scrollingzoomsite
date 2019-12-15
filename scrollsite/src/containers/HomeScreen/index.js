import React from 'react';
import {Component} from 'react';
import Slider from "../../components/Home/Slider";
import HomeBody from "../../components/Home/HomeBody";
import ProjectCarousel from '../../components/Carousel';
import FadeIn from '../../components/FadeIn';
import ClickAndDragBoxes from '../../components/ClickAndDragBoxes';
import StickyScroll from '../../components/StickyScroll';
import Example from '../../components/Example';

export default class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
          
              
                {Example()}
              
            </div>
         );
    }
}