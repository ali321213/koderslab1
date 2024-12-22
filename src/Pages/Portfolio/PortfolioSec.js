import React from 'react'
import { Button, ProjectSlider } from '../../components/Components'
import { Col, Container, Row } from 'react-bootstrap'

const PortfolioSec = () => {
  return (
    <section className='section section_5 sectionportfolio'>
      <Container>
        <Row>
          <Col md={12}>
            <div className="processCard portfolio">
              <ProjectSlider />
              <div className="sliderBtnViewAll">
                <Button
                  LinkText=""
                  BtnLink="/"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PortfolioSec