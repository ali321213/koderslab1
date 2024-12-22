import React from 'react'
import { BannerHeading, Button, OurTeamSlider, Section, SectionHeading, TestimonialSlider, WorkingProcess } from '../../components/Components'
import { CircleText, Gallery, GalleryFour, GalleryOne, GalleryPhone, GalleryThree, GalleryTwo, SectionAbout, SectionOne, SectionThree } from '../../img/AllImages'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUsSec = () => {
    return (
        <>
            <BannerHeading
                bannerHeadingClass="col-md-10 align-self-center col-8 rightPadding__"
                bannerImgClass="col-md-2 align-self-center col-4 LeftPadding__"
                secHeading={
                    <>
                        How Our Agency is <span> Transforming
                            Businesses and Brand </span> Through
                        Online Solutions
                    </>
                }
                bannerImg={CircleText}
            />

            <section className="">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="sectionAboutImg">
                                <img src={SectionAbout} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section">
                <Container>
                    <Row className='justify-content-evenly'>
                        <Col md={3}>
                            <div className="countingContent">
                                <div className="countingContentHeading">
                                    <h1>
                                        <svg width="229" height="74" viewBox="0 0 229 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.556641 2V0.999996H-0.443359V2H0.556641ZM36.1566 2H37.1566V0.999996H36.1566V2ZM36.1566 72V73H37.1566V72H36.1566ZM12.5566 72H11.5566V73H12.5566V72ZM12.5566 19.8H13.5566V18.8H12.5566V19.8ZM0.556641 19.8H-0.443359V20.8H0.556641V19.8ZM0.556641 3H36.1566V0.999996H0.556641V3ZM35.1566 2V72H37.1566V2H35.1566ZM36.1566 71H12.5566V73H36.1566V71ZM13.5566 72V19.8H11.5566V72H13.5566ZM12.5566 18.8H0.556641V20.8H12.5566V18.8ZM1.55664 19.8V2H-0.443359V19.8H1.55664ZM77.1535 53.7L76.4805 52.9604L74.5688 54.7H77.1535V53.7ZM100.754 53.7H101.754V52.7H100.754V53.7ZM100.754 72V73H101.754V72H100.754ZM44.6535 72H43.6535V73H44.6535V72ZM44.6535 57.5L43.9745 56.7659L43.6535 57.0628V57.5H44.6535ZM69.9535 34.1L70.6325 34.8342L70.6375 34.8295L69.9535 34.1ZM58.3535 25.5L57.9063 26.3944L58.8007 26.8416L59.2479 25.9472L58.3535 25.5ZM40.5535 16.6L39.6704 16.1308L39.1895 17.036L40.1063 17.4944L40.5535 16.6ZM87.1535 44.6L86.4837 43.8574L86.4805 43.8604L87.1535 44.6ZM77.1535 54.7H100.754V52.7H77.1535V54.7ZM99.7535 53.7V72H101.754V53.7H99.7535ZM100.754 71H44.6535V73H100.754V71ZM45.6535 72V57.5H43.6535V72H45.6535ZM45.3325 58.2341L70.6325 34.8341L69.2745 33.3659L43.9745 56.7659L45.3325 58.2341ZM70.6375 34.8295C73.0865 32.5335 74.5501 30.6417 75.3965 28.9626C76.2558 27.2578 76.4535 25.8221 76.4535 24.5H74.4535C74.4535 25.5779 74.3012 26.6922 73.6105 28.0624C72.9069 29.4583 71.6205 31.1665 69.2696 33.3705L70.6375 34.8295ZM76.4535 24.5C76.4535 22.5599 75.787 20.8808 74.382 19.7075C73.0036 18.5562 71.0435 18 68.6535 18V20C70.7635 20 72.2034 20.4938 73.1 21.2425C73.9701 21.9692 74.4535 23.0401 74.4535 24.5H76.4535ZM68.6535 18C64.0778 18 59.7298 20.5113 57.4591 25.0528L59.2479 25.9472C61.1772 22.0887 64.8293 20 68.6535 20V18ZM58.8007 24.6056L41.0007 15.7056L40.1063 17.4944L57.9063 26.3944L58.8007 24.6056ZM41.4366 17.0692C46.3435 7.83263 56.0798 1.4 70.8535 1.4V-0.600002C55.4273 -0.600002 44.9635 6.16736 39.6704 16.1308L41.4366 17.0692ZM70.8535 1.4C78.9915 1.4 85.8369 3.50892 90.6222 7.1577C95.3852 10.7895 98.1535 15.9757 98.1535 22.3H100.154C100.154 15.3243 97.0718 9.56045 91.8349 5.56729C86.6201 1.59108 79.3156 -0.600002 70.8535 -0.600002V1.4ZM98.1535 22.3C98.1535 25.6494 97.7188 28.7641 96.0785 32.1517C94.4291 35.5581 91.5276 39.3081 86.4837 43.8574L87.8233 45.3426C92.9795 40.6919 96.078 36.7419 97.8786 33.0233C99.6882 29.2859 100.154 25.8506 100.154 22.3H98.1535ZM86.4805 43.8604L76.4805 52.9604L77.8266 54.4396L87.8266 45.3396L86.4805 43.8604ZM137.293 72.6C128.297 72.6 120.653 69.3489 115.25 63.3319C109.838 57.3057 106.593 48.4135 106.593 37H104.593C104.593 48.7865 107.948 58.1943 113.762 64.6681C119.584 71.1511 127.79 74.6 137.293 74.6V72.6ZM106.593 37C106.593 25.5865 109.838 16.6943 115.25 10.6681C120.653 4.65112 128.297 1.4 137.293 1.4V-0.600002C127.79 -0.600002 119.584 2.84888 113.762 9.33186C107.948 15.8057 104.593 25.2135 104.593 37H106.593ZM137.293 1.4C146.29 1.4 153.934 4.65112 159.337 10.6681C164.748 16.6943 167.993 25.5865 167.993 37H169.993C169.993 25.2135 166.638 15.8057 160.825 9.33186C155.003 2.84888 146.797 -0.600002 137.293 -0.600002V1.4ZM167.993 37C167.993 48.4135 164.748 57.3057 159.337 63.3319C153.934 69.3489 146.29 72.6 137.293 72.6V74.6C146.797 74.6 155.003 71.1511 160.825 64.6681C166.638 58.1943 169.993 48.7865 169.993 37H167.993ZM137.293 55.7C138.601 55.7 139.866 55.3995 141.015 54.6804C142.16 53.9631 143.128 52.8679 143.905 51.3742C145.443 48.4201 146.293 43.7989 146.293 37H144.293C144.293 43.7011 143.444 47.9299 142.131 50.4508C141.484 51.6946 140.739 52.4932 139.953 52.9853C139.17 53.4755 138.286 53.7 137.293 53.7V55.7ZM146.293 37C146.293 30.2011 145.443 25.5798 143.905 22.6258C143.128 21.1321 142.16 20.0369 141.015 19.3197C139.866 18.6005 138.601 18.3 137.293 18.3V20.3C138.286 20.3 139.17 20.5245 139.953 21.0147C140.739 21.5068 141.484 22.3054 142.131 23.5492C143.444 26.0701 144.293 30.2989 144.293 37H146.293ZM137.293 18.3C135.986 18.3 134.72 18.6005 133.572 19.3197C132.427 20.0369 131.459 21.1321 130.681 22.6258C129.144 25.5798 128.293 30.2011 128.293 37H130.293C130.293 30.2989 131.143 26.0701 132.455 23.5492C133.103 22.3054 133.848 21.5068 134.633 21.0147C135.416 20.5245 136.301 20.3 137.293 20.3V18.3ZM128.293 37C128.293 43.7989 129.144 48.4201 130.681 51.3742C131.459 52.8679 132.427 53.9631 133.572 54.6804C134.72 55.3995 135.986 55.7 137.293 55.7V53.7C136.301 53.7 135.416 53.4755 134.633 52.9853C133.848 52.4932 133.103 51.6946 132.455 50.4508C131.143 47.9299 130.293 43.7011 130.293 37H128.293ZM228.432 28.5H229.432V27.5H228.432V28.5ZM228.432 45.5V46.5H229.432V45.5H228.432ZM211.932 45.5V44.5H210.932V45.5H211.932ZM211.932 61.5V62.5H212.932V61.5H211.932ZM193.932 61.5H192.932V62.5H193.932V61.5ZM193.932 45.5H194.932V44.5H193.932V45.5ZM177.432 45.5H176.432V46.5H177.432V45.5ZM177.432 28.5V27.5H176.432V28.5H177.432ZM193.932 28.5V29.5H194.932V28.5H193.932ZM193.932 12.5V11.5H192.932V12.5H193.932ZM211.932 12.5H212.932V11.5H211.932V12.5ZM211.932 28.5H210.932V29.5H211.932V28.5ZM227.432 28.5V45.5H229.432V28.5H227.432ZM228.432 44.5H211.932V46.5H228.432V44.5ZM210.932 45.5V61.5H212.932V45.5H210.932ZM211.932 60.5H193.932V62.5H211.932V60.5ZM194.932 61.5V45.5H192.932V61.5H194.932ZM193.932 44.5H177.432V46.5H193.932V44.5ZM178.432 45.5V28.5H176.432V45.5H178.432ZM177.432 29.5H193.932V27.5H177.432V29.5ZM194.932 28.5V12.5H192.932V28.5H194.932ZM193.932 13.5H211.932V11.5H193.932V13.5ZM210.932 12.5V28.5H212.932V12.5H210.932ZM211.932 29.5H228.432V27.5H211.932V29.5Z" fill="#3F3F3F" />
                                        </svg>
                                    </h1>
                                </div>
                                <div className="countingContentPara">
                                    <p>Project Completed</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="countingContent">
                                <div className="countingContentHeading">
                                    <h1>50+</h1>
                                </div>
                                <div className="countingContentPara">
                                    <p>Happy Customers</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="countingContent">
                                <div className="countingContentHeading">
                                    <h1>5+</h1>
                                </div>
                                <div className="countingContentPara">
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section bgLayer">
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={7}>
                            <div className="secCenterHeading">
                                <SectionHeading
                                    SecUpperHeading="our Agency Story"
                                    SecHeading={(
                                        <>
                                            Discover the Story Behind
                                            <span className='d-block d-md-inline-block'> The Koders Lab </span>
                                        </>
                                    )}
                                />
                            </div>
                        </Col>
                        <Col md={12} className='discoverContent'>
                            <Row>
                                <Col md={7} className='align-self-center'>
                                    <div className="discoverItemHeading">
                                        <h3>How our <br className='d-block d-md-none' /> agency is Pushing
                                            The boundaries of online
                                            marketing and design</h3>
                                    </div>
                                </Col>
                                <Col md={5} className='align-self-center'>
                                    <div className="discoverItemPara">
                                        <p>The Koders Lab, where innovative ideas come to life. We are a dynamic team of creative professionals, passionate about delivering exceptional digital solutions to help businesses thrive in the digital era.</p>
                                        <p>At The Koders Lab, we believe that technology has the power to transform businesses and drive meaningful change. With our expertise in web design, mobile app development, and custom software solutions, we empower businesses to unlock their full potential and stay ahead of the competition.</p>
                                        <p>Our team comprises talented individuals who are experts in their respective fields. From skilled designers who craft visually stunning interfaces to experienced developers who bring functionality to life, we work collaboratively to deliver outstanding results.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={9} className='px-md-0'>
                            <div className="discoverItemImgSec d-none d-md-block text-center">
                                <img src={Gallery} width="100%" alt="" />
                            </div>
                            <div className="discoverItemImgSec d-block d-md-none text-center">
                                <img src={GalleryPhone} width="100%" alt="" />
                            </div>
                        </Col>
                        <Col md={12} className='discoverItemImgSec'>
                            <Row>
                                <Col md={6} className='align-self-center'>
                                    <div className="discoverItemPara">
                                        <p>We pride ourselves on our customer-centric approach, taking the time to understand your unique needs and goals. By combining our technical expertise with a deep understanding of your business, we create tailored solutions that align with your vision.</p>
                                        <p>We are committed to staying at the forefront of technological advancements, continuously refining our skills and exploring new possibilities. This dedication allows us to deliver cutting-edge solutions that not only meet your immediate requirements but also anticipate future trends and challenges.</p>
                                        <p>Transparency, integrity, and open communication are the cornerstones of our work ethic. We believe in building strong and long-lasting relationships with our clients, based on trust and mutual respect. We strive to exceed expectations and provide exceptional service throughout the project journey.</p>
                                        <p>Whether you are a startup looking to make your mark or an established business aiming to revamp your digital presence, we are here to help. Let us be your digital partner and together, we will turn your ideas into remarkable digital experiences.</p>
                                    </div>
                                </Col>
                                <Col md={6} className='align-self-center'>
                                    <div className="discoverItemImg">
                                        <img src={SectionThree} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section section_4 sectionPadding">
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={9}>
                            <div className="secCenterHeading">
                                <SectionHeading
                                    SecUpperHeading="WORKING PROCESS"
                                    SecHeading={(
                                        <>
                                            Our Working Process - How <span>We Work
                                                For Our</span> Customers
                                        </>
                                    )}
                                />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="processCard">
                                <WorkingProcess />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section section_7">
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={9}>
                            <div className="secCenterHeading">
                                <SectionHeading
                                    SecUpperHeading="OUR Team"
                                    SecHeading={(
                                        <>
                                            Our Creative Team Provide The <span>Best IT
                                                Solutions</span> Services
                                        </>
                                    )}
                                />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="testimonialSlider">
                                <OurTeamSlider />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section section_6 sectionPaddingIn">
                <Container>
                    <Row className='justify-content-center'>
                        <Col md={9}>
                            <div className="secCenterHeading">
                                <SectionHeading
                                    SecUpperHeading="Testimonials"
                                    SecHeading={(
                                        <>
                                            Client <span>Success</span> Is Our Success
                                        </>
                                    )}
                                />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="testimonialSlider">
                                <TestimonialSlider />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="section contactTKLSec">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="secPara">
                                <p>Contact <b> The Koders Lab </b> today and let's embark on a transformative journey into the world of digital innovation.</p>
                                <p>Solve Your IT Needs Today!</p>
                            </div>
                            <div className="btnSec">
                                <Button
                                    BtnLink="/contact-us"
                                    LinkText="Get Started"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutUsSec