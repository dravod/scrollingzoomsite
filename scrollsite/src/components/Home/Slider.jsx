import React from "react";
import {Component} from "react";
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default class Slider extends Component {
    state = { 
     }
    render() { 
        return (
            <div>
                <div className="top-shadow"></div>

                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav={true}
                    autoWidth={true}
                    center={true}
                    style={{height:"100vh", width:"100vw"}}
                >
           
                <div className="item" style={{backgroundImage: "url('images/industrial_hero_1.jpg'"}} >
                    <Container>
                        <Row slider-text align-items-center justify-content-center>
                            <Col lg='7' text-center col-sm='12' element-animate>
                                <div className="btn-play-wrap mx-auto"><p className="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" className="btn-play"><span className="ion ion-ios-play"></span></a></p></div>
                                <h1 className="mb-4"><span>We Are Industrial Company</span></h1>
                                <p mb="5" w="75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias iste ipsa excepturi nostrum sequi molestias?</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            
                <div class="item" style={{backgroundImage: "url('images/industrial_hero_2.jpg')"}}>
                    <Container>
                        <Row slider-text align-items-center justify-content-center className="row">
                            <Col lg='7' text-center col-sm='12' element-animate>
                                <div className="btn-play-wrap mx-auto"><p className="mb-4"><a href="https://vimeo.com/59256790" data-fancybox data-ratio="2" className="btn-play"><span className="ion ion-ios-play"></span></a></p></div>
                                <h1><span>The Best Level of Excellence in Steel Fabrication</span></h1>
                                <p className="mb-5 w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae fuga, hic quae molestias aperiam deserunt!</p>
                            </Col>
                        </Row>
                    </Container>
                    
                </div>
            
            </OwlCarousel>
            </div>
          );
    }
};