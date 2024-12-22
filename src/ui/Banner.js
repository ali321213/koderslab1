import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from '../components/Components'

const Banner = ({ BannerPara, BannerHeading, sectionOne }) => {
    return (
        <>
            <div className="banner d-none d-lg-block">
                <Container>
                    <Row className='flex-column-reverse flex-lg-row flex-lg-wrap'>
                        <Col lg={6} className='align-self-center'>
                            <div className="bannerContent">
                                <div className="bannerHeading">
                                    <h1>{BannerHeading}</h1>
                                </div>
                                <div className="bannerPara">
                                    <p>{BannerPara}</p>
                                </div>
                                <Button
                                    LinkText="Get Started"
                                    BtnLink="/"
                                />
                            </div>
                        </Col>
                        <Col lg={6} className='align-self-center mb-5 mb-lg-0'>
                            <div className="bannerImg">
                                <img src={sectionOne} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="banner d-block d-lg-none">
                <Container>
                    <Row>
                        <Col lg={6} className='align-self-center'>
                            <div className="bannerContent">
                                <div className="bannerHeading">
                                    <h1>{BannerHeading}</h1>
                                </div>
                                <div className="bannerPara">
                                    <p>{BannerPara}</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='align-self-center mb-5 mb-lg-0'>
                            <div className="bannerImg">
                                <img src={sectionOne} alt="" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="bannerContent">
                                <Button
                                    LinkText="Get Started"
                                    BtnLink="/"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Banner