import React, {Component} from "react"

export default class Footer  extends Component {
    state = {  }
    render() { 
        return ( 
            <footer className="site-footer" role="contentinfo">
                <div className="container">
                    <div className="row mb-5">
                    <div className="col-md-4 mb-5">
                        <h3>About The Industrial</h3>
                        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. .</p>
                        <ul className="list-unstyled footer-link d-flex footer-social">
                        <li><a href="#" className="p-2"><span className="fa fa-twitter"></span></a></li>
                        <li><a href="#" className="p-2"><span className="fa fa-facebook"></span></a></li>
                        <li><a href="#" className="p-2"><span className="fa fa-linkedin"></span></a></li>
                        <li><a href="#" className="p-2"><span className="fa fa-instagram"></span></a></li>
                        </ul>

                    </div>
                    <div className="col-md-5 mb-5 pl-md-5">
                        <h3>Contact Info</h3>
                        <ul className="list-unstyled footer-link">
                        <li className="d-block">
                            <span className="d-block">Address:</span>
                            <span >34 Street Name, City Name Here, United States</span></li>
                        <li className="d-block"><span className="d-block">Telephone:</span><span >+1 242 4942 290</span></li>
                        <li className="d-block"><span className="d-block">Email:</span><span >info@yourdomain.com</span></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-5">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled footer-link">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Disclaimers</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 text-md-center text-left">
                        <p className="copyright">
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                        </p>
                    </div>
                    </div>
                </div>
            </footer>
         );
    }
}
 