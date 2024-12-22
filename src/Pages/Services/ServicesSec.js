import React, { useEffect, useState } from 'react'
import MenuHeader from '../../ui/MenuHeader'
import Banner from '../../ui/Banner'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useHistory } from 'react-router-dom';
import { ServiesFive, ServiesFour, ServiesOne, ServiesSix, ServiesThree, ServiesTwo } from '../../img/AllImages';

const ServicesSec = () => {

  const location = useLocation();
  const history = useHistory();

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const storedActiveTab = queryParams.get('activeTab');

    if (storedActiveTab) {
      setActiveTab(parseInt(storedActiveTab));
    } else {
      queryParams.set('activeTab', activeTab);
      history.replace({ search: queryParams.toString() });
    }
  }, [location, history, activeTab]);

  const handleClick = (tabIndex) => {
    setActiveTab(tabIndex);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('activeTab', tabIndex);
    history.push({ search: queryParams.toString() });
  };

  return (
    <>
      <div className='menuHeaderMain'>
        <Container>
          <Row>
            <Col md={12}>
              <nav className="menuHeader">
                <ul>
                  <li onClick={() => handleClick(1)} className={activeTab === 1 ? "menuHeaderActive" : ""}>UI/UX Design</li>
                  <li onClick={() => handleClick(2)} className={activeTab === 2 ? "menuHeaderActive" : ""}>Website Development</li>
                  <li onClick={() => handleClick(3)} className={activeTab === 3 ? "menuHeaderActive" : ""}>Mobile App Development</li>
                  <li onClick={() => handleClick(4)} className={activeTab === 4 ? "menuHeaderActive" : ""}>Custom Software Development</li>
                  <li onClick={() => handleClick(5)} className={activeTab === 5 ? "menuHeaderActive" : ""}>MVP Development</li>
                  <li onClick={() => handleClick(6)} className={activeTab === 6 ? "menuHeaderActive" : ""}>Maintenance & Support</li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>

      {activeTab === 1 &&
        <Banner
          BannerHeading={(
            <>
              UI/UX <span>Design</span>
            </>
          )}
          BannerPara="Our UI/UX design services are tailored to create visually stunning and intuitive user interfaces. We focus on understanding your target audience and business goals to design interfaces that enhance user engagement and satisfaction. From wireframing and prototyping to creating pixel-perfect designs, we ensure a seamless user experience across all platforms."
          sectionOne={ServiesOne}
        />
      }
      {activeTab === 2 &&
        <Banner
          BannerHeading={(
            <>
              Website <span> Development </span>
            </>
          )}
          BannerPara="Our website development services encompass building websites that are not only visually appealing but also highly functional and user-friendly. We utilize the latest web technologies to create responsive and optimized websites that provide an exceptional browsing experience. Whether you need a simple business website or a complex e-commerce platform, we have the expertise to deliver outstanding results."
          sectionOne={ServiesTwo}
        />
      }
      {activeTab === 3 &&
        <Banner
          BannerHeading={(
            <>
              Mobile App
              <span> Development </span>
            </>
          )}
          BannerPara="In the age of smartphones, having a mobile app can greatly enhance your business's reach and customer engagement. Our mobile app development services cover both Android and iOS platforms, ensuring that your app is accessible to a wide audience. We combine user-centric design with robust development methodologies to create mobile applications that are visually captivating, user-friendly, and feature-rich."
          sectionOne={ServiesThree}
        />
      }
      {activeTab === 4 &&
        <Banner
          BannerHeading={(
            <>
              Custom Software
              <span> Development </span>
            </>
          )}
          BannerPara="We offer custom software development services to cater to the unique needs of your business. Our team works closely with you to understand your requirements and develop tailored software solutions that streamline your operations, increase efficiency, and drive growth. Whether it's a customer relationship management (CRM) system, inventory management software, or any other custom software, we deliver solutions that align with your business objectives. "
          sectionOne={ServiesFour}
        />
      }
      {activeTab === 5 &&
        <Banner
          BannerHeading={(
            <>
              MVP <span> Development </span>
            </>
          )}
          BannerPara="If you have a groundbreaking idea for a digital product but are unsure about its viability, our MVP (Minimum Viable Product) development services can help you test the market quickly and cost-effectively. We collaborate closely with you to identify the core features of your product and build a functional prototype that can be validated by your target audience. With our expertise, you can gather valuable feedback and make informed decisions before investing in full-scale development."
          sectionOne={ServiesFive}
        />
      }
      {activeTab === 6 &&
        <Banner
          BannerHeading={(
            <>
              Maintenance &
              <span> Support </span>
            </>
          )}
          BannerPara="We provide comprehensive maintenance and support services to ensure that your digital assets remain secure, up-to-date, and optimized. Our team is committed to monitoring and resolving any technical issues, implementing updates and enhancements, and performing regular backups to safeguard your data. With our maintenance and support services, you can focus on your business while we take care of the technical aspects."
          sectionOne={ServiesSix}
        />
      }
    </>
  )
}

export default ServicesSec