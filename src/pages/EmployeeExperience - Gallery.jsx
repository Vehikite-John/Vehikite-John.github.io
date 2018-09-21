import React from 'react'
import ImageGallery from 'react-image-gallery'
import { Container, Row, Col } from 'reactstrap'
import SectionHeading from '../components/SectionHeading'
import employeeExperience1 from '../assets/images/employee-experience/employee-experience1.jpg'
import employeeExperience2 from '../assets/images/employee-experience/employee-experience2.jpg'
import employeeExperience3 from '../assets/images/employee-experience/employee-experience3.jpg'
import empEx1Thumb from '../assets/images/employee-experience/employee-experience1_tn.jpg'
import empEx2Thumb from '../assets/images/employee-experience/employee-experience2_tn.jpg'
import empEx3Thumb from '../assets/images/employee-experience/employee-experience3_tn.jpg'

const EmployeeExperience = (props) => {

  const images = [
    {
      original: employeeExperience1,
      thumbnail: empEx1Thumb,
    },
    {
      original: employeeExperience2,
      thumbnail: empEx2Thumb,
    },
    {
      original: employeeExperience3,
      thumbnail: empEx3Thumb,
    },
  ]
  return (
    <section>
      <SectionHeading>The Employee Experience</SectionHeading>
      <Container>
        <Row>
          <Col>
            <p>1075 Terra Bella is designed to enhance <a href="https://thefutureorganization.com/employee-experience-index/">the employee experience</a> with functional, flexible workplace fostering social and inspirational places. Our aim is to facilitate a nature inspired workspace allowing the user to customize an employee environment inspiring team collaboration, innovation and creativity.</p>
          </Col>
        </Row>
      </Container>
      <ImageGallery items={images} />
    </section>
  )
}

export default EmployeeExperience;
