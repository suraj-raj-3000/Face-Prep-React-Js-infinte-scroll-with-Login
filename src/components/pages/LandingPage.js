import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.png'
import './LandingPageCss.css';

export default function LandingPage() {
    return (
        <div style={HeaderStyle}>
            <Container>
                <Row>
                    <Col><h1 style={title_text} className="text-center">Welcome to Our Landing Page</h1></Col>
                </Row>
                <Row>
                    <Col><p className=" text-center">join us now and don't waste time</p></Col>
                </Row>
            </Container>
            
            
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
            <Footer />
        </div>
        
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "Black"
}

const title_text = {
    marginTop: "10%"
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by <a href="https://github.com/suraj-raj-3000" target="_blank" rel="noopener noreferrer">SURAJ</a></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}