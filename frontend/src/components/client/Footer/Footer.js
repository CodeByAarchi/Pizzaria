import './Footer.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer" id="contact">
            <div className="top-footer section">
                <div className="sec-wp">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-info">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src={logo} alt="logo" />
                                        </a>
                                    </div>
                                    <p className='info'>"Indulge in a Slice of Happiness: Serving Fresh, Delicious Pizza Made with Love! 😊🍕"</p>
                                    <div className="social-icon">
                                        <ul>
                                            <li><a href="/"><i className="uil uil-facebook-f"></i></a></li>
                                            <li><a href="/backend"><i className="uil uil-instagram"></i></a></li>
                                            <li><a href="/"><i className="uil uil-github-alt"></i></a></li>
                                            <li><a href="/"><i className="uil uil-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="footer-flex-box">
                                    <div className="footer-table-info">
                                        <h3 className="h3-title">open hours</h3>
                                        <ul className='clock'>
                                            <li><i className="uil uil-clock"></i> Mon-Thurs : 9am - 22pm</li>
                                            <li><i className="uil uil-clock"></i> Fri-Sun : 11am - 22pm</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-flex-box-2">
                                    <div className="footer-menu food-nav-menu">
                                        <h3 className="h3-title">Links</h3>
                                        <ul className="column-2">
                                            <li><Link to="/" className='a'>Home</Link></li>
                                            <li><Link to="/aboutus">About Us</Link></li>
                                            <li><Link to="/menu">Menu</Link></li>
                                            <li><Link to="/gallary">Gallery</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-flex-box-3">
                                    <div className="footer-menu">
                                        <h3 className="h3-title">Company</h3>
                                        <ul className='column-3'>
                                            <li><a href="/" >Terms & Conditions</a></li>
                                            <li><a href="/">Privacy Policy</a></li>
                                            <li><a href="/">Cookie Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
