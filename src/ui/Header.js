import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CloseIcon, Logo, MenuIcon } from '../img/AllImages'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/Components'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)

    const location = useLocation();
    const currentUrl = location.pathname;

    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col lg={3} xs={6}>
                            <div className="logo">
                                <Link to="/"><img src={Logo} alt="" /></Link>
                            </div>
                        </Col>
                        <Col lg={6} className='align-self-center d-none d-lg-block'>
                            <nav>
                                <ul style={{ justifyContent: "center" }}>
                                    <li className={currentUrl === "/services" ? "activeLink" : ""}><Link to="/services">Services</Link></li>
                                    <li className={currentUrl === "/portfolio" ? "activeLink" : ""}><Link to="/portfolio">Portfolio</Link></li>
                                    <li className={currentUrl === "/about-us" ? "activeLink" : ""}> <Link to="/about-us">Company</Link></li>
                                </ul>
                            </nav>
                        </Col>
                        <Col lg={3} xs={4} className='d-none d-lg-block'>
                            <div className="headerBtn">
                                <Button
                                    LinkText="Get In Touch"
                                    BtnLink="/contact-us"
                                />
                            </div>
                        </Col>
                        <Col xs={6} className='d-block d-lg-none align-self-center'>
                            <div className="menuIcon">
                                <span onClick={() => setShowMenu(true)}>
                                    <img src={MenuIcon} alt="" />
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {showMenu === true ? (
                    <div className="mobileMenu">
                        <div className="logo">
                            <Link to="/"><img src={Logo} alt="" /></Link>
                            <div className="close" onClick={() => setShowMenu(false)}>
                                <CloseIcon />
                            </div>
                        </div>
                        <div className="mobileMenuLink">
                            <nav>
                                <ul style={{ justifyContent: "center" }}>
                                    <li className={currentUrl === "/services" ? "activeLink" : ""}><Link to="/services">Services</Link></li>
                                    <li className={currentUrl === "/portfolio" ? "activeLink" : ""}><Link to="/portfolio">Portfolio</Link></li>
                                    <li className={currentUrl === "/about-us" ? "activeLink" : ""}> <Link to="/about-us">Company</Link></li>
                                    <div className="headerBtn">
                                        <Button
                                            LinkText="Get In Touch"
                                            BtnLink="/contact-us"
                                        />
                                    </div>
                                </ul>
                            </nav>
                        </div>
                    </div>
                ) : ""}
            </header>
        </>
    )
}

export default Header