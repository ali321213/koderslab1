import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LatestNewsRightArrow, Logo, LogoIcon } from '../img/AllImages'
import { Col, Container, Row } from 'react-bootstrap'
import { LatestNewsData, OurTeamData, ProjectData, ServiceCardData, TestimonialData, WorkingProcessData } from '../Data/Data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Mousewheel } from "swiper";

const Button = ({ LinkText, BtnLink }) => {
    return (
        <>
            <Link to={BtnLink} className="button">{LinkText}</Link>
        </>
    )
}
const Loading = () => {
    return (
        <>
            <div className="loading">
                <img src={LogoIcon} alt="" />
            </div>
        </>
    )
}

const Section = ({ SecUpperHeading, RowClass, ContentClass, SecHeading, SecImgClass, SecPara, SecImg }) => {
    return (
        <section className='section'>
            <Container>
                <Row className={RowClass}>
                    <Col lg={6} className={ContentClass}>
                        <div className="sectionContent">
                            <div className="secUpperHeading">
                                <h4>{SecUpperHeading}</h4>
                            </div>
                            <div className="secHeading">
                                <h2>{SecHeading}</h2>
                            </div>
                            <div className="secPara">
                                <p>{SecPara}</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className={SecImgClass}>
                        <div className="secImg">
                            <img src={SecImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

const SectionHeading = ({ SecUpperHeading, SecHeading }) => {
    return (
        <>
            <div className="secUpperHeading">
                <h4>{SecUpperHeading}</h4>
            </div>
            <div className="secHeading">
                <h2>{SecHeading}</h2>
            </div>
        </>
    )
}

const ServiceCard = () => {
    return (
        <>
            {ServiceCardData.map((item, key) => {
                return (
                    <div className="serviceLink" key={key}>
                        <Link to={item.cardLink}>
                            <div className="cardContent">
                                <div className="cardImg">
                                    <img src={item.cardImg} alt="" />
                                </div>
                                <div className="numberingCircle">
                                    <span>{item.circleNumber}</span>
                                </div>
                                <div className="cardHeading">
                                    <h3>{item.cardHeading}</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

const WorkingProcess = () => {
    return (
        <>
            {WorkingProcessData.map((item, key) => {
                return (
                    <div className="processCardItem" key={key}>
                        <div className="processNumber">
                            <span><img src={item.processNumber} alt="" /></span>
                        </div>
                        <div className="processContent">
                            <div className="processHeading">
                                <h4>{item.processHeading}</h4>
                            </div>
                            <div className="processPara">
                                <p>{item.processPara}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

const ProjectSlider = () => {

    const [filterType, setFilterType] = useState('all');

    const handleFilterChange = (type) => {
        setFilterType(type);
    };

    const filteredProjects = filterType === 'all'
        ? ProjectData
        : ProjectData.filter((project) => project.type === filterType);

    return (
        <>
            <div className="filterBtn">
                <button className={filterType === 'all' ? "btnActive" : ""} onClick={() => handleFilterChange('all')}>All</button>
                <button className={filterType === 'website' ? "btnActive" : ""} onClick={() => handleFilterChange('website')}>Website</button>
                <button className={filterType === 'mobile app' ? "btnActive" : ""} onClick={() => handleFilterChange('mobile app')}>Mobile App</button>
            </div>
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                modules={[Pagination, Mousewheel]}
                className="mySwiper"
            >
                {filteredProjects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <Col lg={6}>
                            <div className="secCenterHeading">
                                <div className="secHeading">
                                    <h3>{project.sliderHeading}</h3>
                                </div>
                                <div className="secPara">
                                    <p>{project.sliderContent}</p>
                                </div>
                                <a className='button' target='__blank' href={project.urlLink}>{project.btnText}</a>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="projectImg">
                                <img src={project.projectImg} alt="" />
                            </div>
                        </Col>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

const TestimonialSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper1"
                breakpoints={{
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                        centeredSlides: false,
                    },
                }}
            >
                {TestimonialData.map((item, key) => (
                    <SwiperSlide key={key}>
                        <div className="sliderCard">
                            <div className="sliderCardImg">
                                <img src={item.sliderCardImg} alt="" />
                            </div>
                            <div className="sliderCardContent">
                                <p>{item.sliderCardContent}</p>
                            </div>
                            <div className="sliderCardHeading">
                                {item.sliderCardHeading}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
        </>
    )
}

const OurTeamSlider = () => {

    // const splideRef = useRef(null);

    // useEffect(() => {
    //     if (splideRef.current) {
    //         splideRef.current.sync();
    //     }
    // }, []);

    return (
        <>
            {/* <Swiper
                slidesPerView={1}
                spaceBetween={0}
                centeredSlides={true}
                centeredSlidesBounds={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper2"
                breakpoints={{
                    1200: {
                        slidesPerView: OurTeamData.length < 7 ? OurTeamData.length : 5,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                }}
            >
                {OurTeamData.map((item, key) => (
                    <SwiperSlide key={key}>
                        <div className="ourTeamSlider">
                            <div className="ourTeamSliderImg">
                                <img src={item.ourTeamSliderImg} alt="" />
                            </div>
                            <div className="ourTeamSliderHeading">
                                {item.ourTeamSliderHeading}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> */}

            <Splide
                options={{
                    perPage: 5,
                    perMove: 1,
                    type: 'loop',
                    focus: 'center',
                    gap: '20px',
                    click: false,
                    arrows: false,
                    noDrag: 'input, textarea, .no-drag', // Specify elements that should not trigger drag
                    breakpoints: {
                        1200: {
                            perPage: 4,
                        },
                        992: {
                            perPage: 3,
                        },
                        768: {
                            perPage: 2,
                        },
                        576: {
                            perPage: 2,
                        },
                        400: {
                            perPage: 1,
                        },
                    }
                }}
                className="custom-slider" // Add a custom class name
            >
                {OurTeamData.map((item, key) => (
                    <SplideSlide key={key}>
                        <div className="ourTeamSlider">
                            <div className="ourTeamSliderImg">
                                <img src={item.ourTeamSliderImg} alt="" />
                            </div>
                            <div className="ourTeamSliderHeading">
                                {item.ourTeamSliderHeading}
                            </div>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>


            {/* <Carousel
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                emulateTouch
                autoPlay
                interval={3000}
                centerMode
                centerSlidePercentage={19.0}
                selectedItem={2}
                infiniteLoop
            >
                
            </Carousel> */}

        </>
    )
}

const LatestNews = () => {
    return (
        <>
            {LatestNewsData.map((item, key) => {
                return (
                    <div className="latestNewsCard" key={key}>
                        <div className="latestNewsImg">
                            <img src={item.latestNewsImg} alt="" />
                            <div className="latestNewsDevelop d-none d-md-block">
                                <span>{item.latestNewsDevelop}</span>
                            </div>
                        </div>
                        <div className="latestNewsCardContent">
                            <div className="latestNewsDevelop d-block d-md-none" style={{ position: "unset", margin: "15px 20px", textAlign: "center", transform: "translateY(0%)" }}>
                                <span>{item.latestNewsDevelop}</span>
                            </div>
                            <div className="latestNewsDateAdmin">
                                <div className="latestNewsDate">
                                    <span><img src={item.latestNewsDateIcon} alt="" /></span>
                                    <span>{item.latestNewsDate}</span>
                                </div>
                                <div className="latestNewsAdmin">
                                    <span><img src={item.latestNewsAdminIcon} alt="" /></span>
                                    <span>{item.latestNewsAdmin}</span>
                                </div>
                            </div>
                            <div className="latestNewsHeading">
                                <h4>{item.latestNewsHeading}</h4>
                            </div>
                            <div className="latestNewsPara">
                                <p>{item.latestNewsPara}</p>
                            </div>
                            <div className="latestNewsLink">
                                <Link to={item.latestNewsLink}>{item.latestNewsLinkText} <img src={LatestNewsRightArrow} alt="" /> </Link>
                            </div>
                        </div>
                    </div >
                )
            })}
        </>
    )
}

const BannerHeading = ({ bannerHeadingClass, bannerImgClass, secHeading, bannerImg }) => {
    return (
        <>
            <section className='bannerHeadingSec'>
                <Container>
                    <Row>
                        <Col className={bannerHeadingClass}>
                            <div className="secHeading">
                                <h1>{secHeading}</h1>
                            </div>
                        </Col>
                        <Col className={bannerImgClass}>
                            <div className="secImg">
                                <img src={bannerImg} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export {
    Button,
    Loading,
    Section,
    SectionHeading,
    ServiceCard,
    WorkingProcess,
    ProjectSlider,
    TestimonialSlider,
    OurTeamSlider,
    LatestNews,
    BannerHeading,
}