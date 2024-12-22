import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaceBook, Instagram, Linkedin, Logo, Twiteer } from '../img/AllImages'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="footerLogo">
                                <img src={Logo} alt="" />
                            </div>
                        </Col>
                        <Col md={6} className='align-self-center '>
                            <div className="copyRight">
                                <span>Copyright © 2022 <br className='d-block d-md-none' /> THE KODERS LAB | All Rights Reserved</span>
                            </div>
                        </Col>
                        <Col md={3} className='align-self-center'>
                            <div className="footerIcon">
                                <ul>
                                    <li><Link to="/"><img src={FaceBook} alt="" /></Link></li>
                                    <li><Link to="/"><img src={Twiteer} alt="" /></Link></li>
                                    <li><Link to="/"><img src={Instagram} alt="" /></Link></li>
                                    <li><Link to="/"><img src={Linkedin} alt="" /></Link></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer