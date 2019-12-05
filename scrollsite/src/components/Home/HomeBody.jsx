import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
import Wobble from 'react-reveal/Wobble';

import Image_1 from "../../assets/images/industrial_featured_img_1.jpg"
import Image_2 from "../../assets/images/industrial_featured_img_2.jpg"

export default class HomeBody extends Component {
    state = {  }
    render() { 
        return (  
            <div className='div'>
            
                <Container className="container">
                <LightSpeed right>
                    <Row mb='5'>
                        <Col text-center>
                            <h2>We'll Handle Any Problems and Solve Them</h2>
                        </Col>
                    </Row>
                </LightSpeed>
                <Fade>
                <Row align-items-stretch>
                    <Col lg='4' lg={{order:2}}>
                        <div className="scaling-image h-100"><div className="frame h-100"><div className="feature-img-bg h-100" style={{backgroundImage: `url(${require('../../assets/images/industrial_feature_1.jpg')}`}}></div></div></div>
                    </Col>
                    <Col md="6" lg="4" feature-1-wrap d-md-flex flex-md-column lg={{order:1}} >
                        <div className="feature-1 d-md-flex">
                            <div className="align-self-center">
                                <span className="ion ion-easel display-4 text-primary"></span>
                                <h3>Ducting Design</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                            </div>
                        </div>
                        <div className="feature-1 d-md-flex">
                            <div className="align-self-center">
                                <span className="ion ion-hammer display-4 text-primary"></span>
                                <h3>Stacks Design</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md='6' col-lg-4 feature-1-wrap d-md-flex flex-md-column lg={{order:3}} >
                        <div className="feature-1 d-md-flex">
                            <div className="align-self-center">
                                <span className="ion ion-cube display-4 text-primary"></span>
                                <h3>Tanks Design</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                            </div>
                        </div>
                        <div className="feature-1 d-md-flex">
                            <div className="align-self-center">
                                <span className="ion ion-clipboard display-4 text-primary"></span>
                                <h3>Structural Design</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Fade>
                
                    <Container>
                    <Slide left>
                        <Row>
                            <Col md="6" lg="4" element-animate >
                                <div className="media block-6 d-block text-center">
                                    <div className="icon mb-3"><span className="ion-android-notifications text-primary"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading">Modern Design</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div>  
                            </Col>
                            <Col md='6' lg='4' element-animate>
                                <div className="media block-6 d-block text-center">
                                    <div className="icon mb-3"><span className="ion-heart text-primary"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading">Built With Passion</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div> 
                            </Col>
                            <Col md='6' lg='4' element-animate >
                                <div className="media block-6 d-block text-center">
                                    <div className="icon mb-3"><span className="ion-flash text-primary"></span></div>
                                    <div className="media-body">
                                        <h3 className="heading">Fast Loading</h3>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                    </div>
                                </div>
                            </Col> 
                        </Row>
                        </Slide>
                    </Container>
                
                <Bounce bottom>
                    <div className="container">
                            <div className="row align-items-center mb-5">
                                <div className="col-lg-7 order-md-2">
                                    <div className="scaling-image"><div className="frame"><img src={Image_1} alt="Free template by Free-Template.co" className="img-fluid"/></div></div>
                                </div>
                                <div className="col-md-5 pr-md-5 mb-5">
                                    <div className="block-41">
                                        <h2 className="block-41-heading mb-5">Let's Build Together</h2>
                                        <div className="block-41-text">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                            <p><a href="#" className="readmore">Read More <span className="ion-android-arrow-dropright-circle"></span></a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Bounce>
                    
                </Container>

                
                    <Container>
                        <Row align-items-center mb="5">
                            <Col lg="7" md={{order:1}}>
                                <div className="scaling-image"><div className="frame"><img src={Image_2} alt="Free template by Free-Template.co" className="img-fluid"/></div></div>
                            </Col>
                            <Col md="5" pl-md="5" mb="5" md={{order:2}}>
                                <div className="block-41">
                                    <h2 className="block-41-heading mb-5">We'll handle any intercate custom design</h2>
                                    <div className="block-41-text">
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                        <p><a href="#" className="readmore">Read More <span className="ion-android-arrow-dropright-circle"></span></a></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>


                <div className="section border-t pb-0">
                    <Container>
                        <Row className='justify-content-center' mb='5' element-animate>
                            <Col md='8' text-center>
                            <h2 className=" heading mb-4">Projects</h2>
                            <p className="mb-5 lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </Col>
                        </Row>
                    </Container>
                    
                    <Container fluid>
                    
                        <Row no-gutters>
                            
                            <Col md='4' element-animate >
                            <Roll left>
                            <Link to="/project" className="link-thumbnail">
                                <h3>Ducting Design in Colorado</h3>
                                <span className="ion-plus icon"></span>
                                <img src="images/industrial_img_1.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
                            </Link>
                            </Roll>
                            </Col>
                           
                        
                            <Col md='4' element-animate>
                            <Roll left>
                            <Link to="/project" className="link-thumbnail">
                                <h3>Tanks Project In California</h3>
                                <span className="ion-plus icon"></span>
                                <img src="images/industrial_img_2.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
                            </Link>
                            </Roll>
                            </Col>
                           
                            <Col md='4' element-animate>
                            <Roll left>
                            <Link to="/project" className="link-thumbnail">
                                <h3>Structural Design in New York</h3>
                                <span className="ion-plus icon"></span>
                                <img src="images/industrial_img_3.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
                            </Link>
                            </Roll>
                            </Col>
                            
                           
                            <Col md='4' element-animate>
                            <Roll right>
                            <Link to="/project" className="link-thumbnail">
                                <h3>Stacks Design</h3>
                                <span className="ion-plus icon"></span>
                                <img src="images/industrial_img_4.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
                            </Link>
                            </Roll>
                            </Col>
                            
                          
                            <Col md='4' element-animate>
                            <Roll right>
                            <Link to="/project" className="link-thumbnail">
                                <h3>Intercate Custom</h3>
                                <span className="ion-plus icon"></span>
                                <img src="images/industrial_img_5.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
                            </Link>
                            </Roll>
                            </Col>
                            
                            
                            <Col md='4' element-animate>
                            <Roll right>
                                <Link to="/project" className="link-thumbnail">
                                    <h3>Banker Design</h3>
                                    <span className="ion-plus icon"></span>
                                    <Image src="images/industrial_img_6.jpg" alt="Free template by Free-Template.co" className="img-fluid"/>
                                </Link>
                                </Roll>
                            </Col>
                            
                        </Row>
                        
                    </Container>
                    
                </div>
            </div>
        )}
}