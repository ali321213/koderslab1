import React from 'react'
import Banner from '../../ui/Banner'
import { Button, LatestNews, OurTeamSlider, ProjectSlider, Section, SectionHeading, ServiceCard, TestimonialSlider, WorkingProcess } from '../../components/Components'
import { LatestNewsRightArrow, SectionOne, SectionTwo, ServiceFive, ServiceFour, ServiceOne, ServiceSix, ServiceThree, ServiceTwo } from '../../img/AllImages'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom"

const HomeSec = () => {
  return (
    <>
      <Banner
        BannerHeading={(
          <>
            Innovative <span> Design
              Solutions </span> Tailored to
            Your Vision
          </>
        )}
        BannerPara="Access an elite Agile product team at your fingertips, equipped with the skills, experience, and expertise to accelerate your product development and deliver exceptional results on demand."
        sectionOne={SectionOne}
      />

      <Section
        RowClass=""
        SecUpperHeading="ABOUT US"
        SecHeading={(
          <>
            We Deliver <span>World Class
              Software</span> Solutions
          </>
        )}
        SecPara="We are a digital transformation consultancy and software development company that provides cutting edge engineering solutions, helping Fortune 80 companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey. Since 2020 we have been a visionary and a reliable software engineering partner for world-class brands."
        SecImg={SectionTwo}
        ContentClass="align-self-center mb-5 mb-lg-0"
        SecImgClass="align-self-center"
      />

      <section className="section">
        <Container>
          <Row className='justify-content-center'>
            <Col md={8}>
              <div className="secCenterHeading">
                <SectionHeading
                  SecUpperHeading="Services"
                  SecHeading={(
                    <>
                      We Are Offering All Kind Of <span>Tech
                        Solution</span> Services
                    </>
                  )}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="serviceCard">
                <ServiceCard />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section_4">
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

      <section className="py-0 pt-md-5 mt-0 mt-md-5">
        <Container>
          <Row className='justify-content-center'>
            <Col md={9}>
              <div className="secCenterHeading">
                <SectionHeading
                  SecUpperHeading="OUR WORKS"
                  SecHeading={(
                    <>
                      We Are Offering All Kind Of <span>IT
                        Solutions</span> Services
                    </>
                  )}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section_5">
        <Container>
          <Row className='justify-content-center'>
            <Col md={12}>
              <div className="processCard">
                <ProjectSlider />
                <div className="sliderBtnViewAll">
                  <Button
                    LinkText="View All Projects"
                    BtnLink="/"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section_6">
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


      <section className="section section_7">
        <Container>
          <Row className='justify-content-center'>
            <Col md={9}>
              <div className="secCenterHeading secCenterHeadingLast">
                <SectionHeading
                  SecUpperHeading="Our Latest News"
                  SecHeading={(
                    <>
                      Read Our Latest <span>Tips</span> & Tricks
                    </>
                  )}
                />
              </div>
            </Col>
            <Col md={12}>
              <div className="testimonialSlider">
                <LatestNews />
                <div className="latestNewsContent">
                  <p>We Have More Eseful Blogs For You. <Link to="/">Read More <img src={LatestNewsRightArrow} alt="" /></Link></p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HomeSec