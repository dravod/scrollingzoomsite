import React from "react";
import {Component} from "react";


export default class Slider extends Component {
    state = { 
     }
    render() { 
        return (
    <div className="top-shadow">
        <div className="home-slider owl-carousel">
            <div className="slider-item" style={{backgroundImage: "url(images/industrial_hero_1.jpg)"}}>
                <div className="container">
                <div className="row slider-text align-items-center justify-content-center">
                    <div className="col-lg-7 text-center col-sm-12 element-animate">
                    <div className="btn-play-wrap mx-auto"><p className="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" className="btn-play"><span className="ion ion-ios-play"></span></a></p></div>
                    <h1 className="mb-4"><span>We Are Industrial Company</span></h1>
                    <p className="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iste ipsa excepturi nostrum sequi molestias?</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="slider-item" style={{backgroundImage: 'url(images/industrial_hero_2.jpg)'}}>
                <div className="container">
                <div className="row slider-text align-items-center justify-content-center">
                    <div className="col-lg-7 text-center col-sm-12 element-animate">
                    <div className="btn-play-wrap mx-auto"><p className="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" className="btn-play"><span className="ion ion-ios-play"></span></a></p></div>
                    <h1><span>The Best Level of Excellence in Steel Fabrication</span></h1>
                    <p className="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae fuga, hic quae molestias aperiam deserunt!</p>
                    </div>
                </div>
                </div>
                
            </div>

        </div>
      </div>
          );
    }
};