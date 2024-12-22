import React, { useEffect, useRef, useState } from 'react'
import { BannerHeading, Button, Section, SectionHeading } from '../../components/Components'
import { CardArrow, CardOne, CardThree, CardTwo, CircleText, Facebook, FacebookSocial, InstagramSocial, LinkedinSocial, Location, Message, Phone, Tweeter, TweeterSocial, Whatsapp, WhatsappSocial } from '../../img/AllImages'
import { Col, Container, Row } from 'react-bootstrap'
import { FormBtnBudgetData, FormBtnData } from '../../Data/Data'
import { Link } from 'react-router-dom'

// import axios from 'axios';
// import { useForm } from "react-hook-form";

const ContactUsSec = () => {

  const [cardActive, setCardActive] = useState(true)

  // const { register, reset, handleSubmit, formState: { errors }, } = useForm();

  // const onSubmit = async (data) => {
  //   console.log(data)
  //   reset();
  //   await axios
  //     .post("https://api.thekoderslab.com/public/api/koderslabContact", data)
  //     .then((response) => {
  //       response.json();
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };



  const [selectedButtons, setSelectedButtons] = useState([]);
  const [otherButtonText, setOtherButtonText] = useState('');

  const toggleButton = (buttonName) => {

    if (selectedButtons.includes(buttonName)) {
      setSelectedButtons(selectedButtons.filter(name => name !== buttonName));
    } else {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  }

  const handleOtherButtonClick = () => {
    if (otherButtonText.trim() !== '') {
      const newButton = {
        id: FormBtnData.length + 1,
        formBtn: otherButtonText
      };
      setSelectedButtons([...selectedButtons,
      ]);
      FormBtnData.push(newButton);
      setOtherButtonText('Other');
    }
  }

  const handleOtherInputChange = (e) => {
    setOtherButtonText(e.target.textContent);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleOtherButtonClick();
      setOtherButtonText('')
    }
  }


  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedButtonsNew, setSelectedButtonsNew] = useState([]);
  const [selectedButtonText, setSelectedButtonText] = useState('');
  const [error, setError] = useState('');

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleOtherButtonClickNew = () => {
    if (selectedButtonText.trim() !== '' && !isNaN(selectedButtonText)) {
      const newButtonNew = {
        id: FormBtnBudgetData.length + 1,
        formBtn: `$ ${selectedButtonText}`,
        selectedButton: null
      };
      setSelectedButtonsNew([...selectedButtonsNew, selectedButtonText]);
      FormBtnBudgetData.push(newButtonNew);
      // setSelectedButton('selected')
      setSelectedButtonText('$ Write your Own');
    } else {
      // setError('Please Add Only Numeric Value');
      alert('Please add only numeric value');
      return;
    }
  }

  const handleOtherInputChangeNew = (e) => {
    setSelectedButtonText(e.target.textContent);
  }

  const handleKeyPressNew = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleOtherButtonClickNew();
      setSelectedButtonText('')
    }
  }

  return (
    <>
      <BannerHeading
        bannerHeadingClass="col-md-7 align-self-center col-8 rightPadding__"
        bannerImgClass="col-md-5 contactTextCircle align-self-center col-4 LeftPadding__"
        secHeading={
          <>
            Let’s Make <span> Something
              Great </span> Together!
          </>
        }
        bannerImg={CircleText}
      />

      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className='contactUsCardSec'>
              <div className="contactUsCard">
                <div className={cardActive === true ? "contactUsCardItem active" : "contactUsCardItem"} onClick={() => setCardActive(true)}>
                  <div className="contactUsCardItemImg">
                    <CardOne />
                  </div>
                  <div className="contactUsCardItemContent">
                    <div className="contactUsCardItemContentHeading">
                      <h5>Discuss Project</h5>
                    </div>
                    <div className="contactUsCardItemContentPara">
                      <p>Fill the form and we will
                        contact you</p>
                    </div>
                  </div>
                  <div className="contactUsCardItemLink">
                    <span>Get In Touch</span>
                    <div className="contactUsCardItemLinkIcon">
                      <CardArrow />
                    </div>
                  </div>
                </div>
                <div className={cardActive === false ? "contactUsCardItem contactUsCardItemTwo active" : "contactUsCardItem contactUsCardItemTwo"} onClick={() => setCardActive(false)}>
                  <div className="contactUsCardItemImg">
                    <CardTwo />
                  </div>
                  <div className="contactUsCardItemContent">
                    <div className="contactUsCardItemContentHeading">
                      <h5>Get Estimate</h5>
                    </div>
                    <div className="contactUsCardItemContentPara">
                      <p>Fill the form and get
                        estimate time and budget
                        of your project.</p>
                    </div>
                  </div>
                  <div className="contactUsCardItemLink">
                    <span>Get Project Estimate </span>
                    <div className="contactUsCardItemLinkIcon">
                      <CardArrow />
                    </div>
                  </div>
                </div>
                <div className="contactUsCardItem">
                  <div className="contactUsCardItemImg">
                    <CardThree />
                  </div>
                  <div className="contactUsCardItemContent">
                    <div className="contactUsCardItemContentHeading">
                      <h5>Email Us</h5>
                    </div>
                    <div className="contactUsCardItemContentPara">
                      <p>Mail us your query or
                        discuss your project.</p>
                    </div>
                  </div>
                  <div className="contactUsCardItemLink">
                    <span>Send Email</span>
                    <div className="contactUsCardItemLinkIcon">
                      <CardArrow />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section contactFormSec">
        <Container>
          <Row>
            <Col md={6}>
              <div className="contactFormItem">
                <div className="contactFormItemSecHeading">
                  <h3>Get In Touch</h3>
                </div>
                <div className="contactFormItemSecPara">
                  <p>Great! We’re excited to hear from you and let’s start something special together. Call us for any inquery.</p>
                </div>
                <div className="contactFormItemSecForm">
                  <form>
                    <div className="form-group">
                      <label htmlFor="yourname">Hi, my name is</label>
                      <input type="text" placeholder='Your Name' name='yourname' id='yourname' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="namelocation">and I'm from</label>
                      <input type="text" placeholder='Company Name or Location Name' id='namelocation' name='namelocation' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="" className='formLabel'>I’m interested in following services:</label>
                      <div className="formBtnSec">
                        {FormBtnData.map((item, key) => {
                          return (
                            <button
                              key={key}
                              className={`formBtn ${selectedButtons.includes(item.formBtn) ? 'selected' : ''}`}
                              onClick={() => toggleButton(item.formBtn)}
                              type='button'
                            >{item.formBtn}</button>
                          )
                        })}
                        <button
                          className={`formBtn selected`}
                          onInput={handleOtherInputChange}
                          onKeyDown={handleKeyPress}
                          type='button'
                          contentEditable={true}
                          suppressContentEditableWarning={true}
                        >{otherButtonText === 'Other' ? 'Other' : (otherButtonText === '' ? "Other" : "")}</button>
                      </div>
                    </div>
                    {cardActive === true ? (<div className="form-group">
                      <label htmlFor="" className='formLabel'>Your expected budget:</label>
                      <div className="formBtnSec">
                        {FormBtnBudgetData.map((item, key) => (
                          <button
                            key={key}
                            className={`formBtn ${selectedButton === item ? 'selected' : ''}`}
                            type='button'
                            onClick={() => handleButtonClick(item)}
                          >
                            {item.formBtn}
                          </button>
                        ))}
                        <button
                          className={`formBtn`}
                          onInput={handleOtherInputChangeNew}
                          onKeyDown={handleKeyPressNew}
                          type='button'
                          contentEditable={true}
                          suppressContentEditableWarning={true}
                        >{selectedButtonText === '$ Write your Own' ? '$ Write your Own' : (selectedButtonText === '' ? "$ Write your Own" : "")}</button>
                      </div>
                      {error}
                    </div>) : ""}
                    <div className="form-group">
                      <label htmlFor="youcancallme">You can call me on</label>
                      <input type="text" placeholder='Your Phone Number' id='youcancallme' name='youcancallme' />
                    </div>
                    <div className="form-group">
                      <label htmlFor="oremailmeat">or email me at</label>
                      <input type="text" placeholder='Your Email Address' id='oremailmeat' name='oremailmeat' />
                    </div>
                    {cardActive === false ? (<div className="form-group">
                      <label htmlFor="oremailmeat">Your Project Detail</label>
                      <input type="text" placeholder='Your Email Address' id='oremailmeat' name='oremailmeat' />
                    </div>) : ""}
                    {cardActive === true ? (<div div className="form-group">
                      <label htmlFor="" className='formLabel'>Please send me a Non Disclosure Agreement for a confidential consultation.</label>
                      <div className="formBtnSecItem">
                        <button className='formBtn' type='button'>Absolutely</button>
                        <button className='formBtn' type='button'>No, Thank You</button>
                      </div>
                    </div>) : ""}
                    <Button
                      BtnLink="/"
                      LinkText="Submit"
                    />
                  </form>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="contactFormItemSec">
                <div className="contactFormItemHeading">
                  <h3>Our Contact
                    Information</h3>
                </div>
                <div className="contactFormItemPara">
                  <p>Don’t know where to start? Let’s figure it out together and start your next big project today!</p>
                </div>
                <div className="contactFormItemList">
                  <ul>
                    <li>
                      <a href="mailto:contact@thekoderslab.com">
                        <span><img src={Message} alt="" /></span>
                        <span>contact@thekoderslab.com</span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+923267139099">
                        <span><img src={Phone} alt="" /></span>
                        <span>+92 326 7139 099</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://api.whatsapp.com/send?phone=923267139099" target='__blank'>
                        <span><img src={Whatsapp} alt="" /></span>
                        <span>+92 326 7139 099</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.google.com/maps?q=Model+Town,+Gujranwala,+Pakistan" target='__blank'>
                        <span><img src={Location} alt="" /></span>
                        <span>Model Town, Gujranwala, Pakistan</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container >
      </section >

      <section className='section socialSectionDivCard'>
        <Container>
          <Row>
            <Col md={9} className='mx-auto'>
              <div className="secCenterHeading">
                <SectionHeading
                  SecUpperHeading="Find Us Socilally"
                  SecHeading={(
                    <>
                      Our <span> Social Media </span> Accounts
                    </>
                  )}
                />
                <div className="secPara">
                  <p>Follow us on social media for updates and news:</p>
                </div>
              </div>
              <div className="secIconsLink">
                <div className="secIconsLinkItems">
                  <Link to="/">
                    <img src={TweeterSocial} alt="" />
                  </Link>
                </div>
                <div className="secIconsLinkItems">
                  <Link to="/">
                    <img src={FacebookSocial} alt="" />
                  </Link>
                </div>
                <div className="secIconsLinkItems">
                  <Link to="/">
                    <img src={LinkedinSocial} alt="" />
                  </Link>
                </div>
                <div className="secIconsLinkItems">
                  <Link to="/">
                    <img src={InstagramSocial} alt="" />
                  </Link>
                </div>
                <div className="secIconsLinkItems">
                  <Link to="/">
                    <img src={WhatsappSocial} alt="" />
                  </Link>
                </div>
              </div>
              <div className="secPara">
                <p>We look forward to hearing from you soon!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ContactUsSec