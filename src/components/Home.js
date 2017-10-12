import React from 'react';
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem';
import HomeContent from './HomeContent';
import AboutUs from './AboutUs';
import Events from './Events';
import Contact from './ContactUs';
import ImgCarousel from './ImgCarousel';
import config from '../data/config.js';


export default class Home extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            content: 1
        };

    }
    handleSelect(selectedKey){
        this.setState({content: selectedKey});
    }
    render() {
        return (
            <div> 
                <div className="navbar-fixed-top">
                    <div className="header-main">
                        <div className="logo-area-celebration">
                            <h1><a style={{'textDecoration': 'none', 'color' :'inherit'}} href="#home">{config.groom} & {config.bride}</a></h1>
                        </div>
                    </div>
                    <Nav bsStyle="pills" className="nav-center-align font-color">
                        <NavItem eventKey={2} href="#about-us">Families</NavItem>
                        <NavItem eventKey={3} href="#images">Photos</NavItem>
                        <NavItem eventKey={4} href="#events">Ceremonies</NavItem>
                        <NavItem eventKey={5} href="#contact">Contact Us</NavItem>
                    </Nav>
                </div>
                <div className="main">
                    <div id="home" className="background-layout row">
                        <HomeContent />
                    </div>
                    <div id="about-us" className="about">
                        <AboutUs/>
                    </div>
                    <div id="images" className="images">
                        <ImgCarousel/>
                    </div>
                    <div id="events" className="events" >
                        <Events/>
                    </div>
                    <div id="contact" className="contact" >
                        <Contact/>
                    </div>
                </div>
            </div>
        )
    }
}
