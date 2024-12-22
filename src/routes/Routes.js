import React from 'react'
// import AboutUs from "../Pages/AboutUs"
// import ContactUs from "../Pages/ContactUs"

const Home = React.lazy(() => import('../Pages/Home.js'))
const Services = React.lazy(() => import('../Pages/Services.js'))
const Portfolio = React.lazy(() => import('../Pages/Portfolio.js'))
const AboutUs = React.lazy(() => import('../Pages/AboutUs.js'))
const ContactUs = React.lazy(() => import('../Pages/ContactUs.js'))

const routes = [

    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/services', exact: true, name: 'Services', component: Services },
    { path: '/portfolio', exact: true, name: 'Portfolio', component: Portfolio },
    { path: '/about-us', exact: true, name: 'About Us', component: AboutUs },
    { path: '/contact-us', exact: true, name: 'Contact Us', component: ContactUs },

]

export default routes