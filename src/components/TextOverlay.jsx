import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import SectionHeading from '../components/SectionHeading'

const TextOverlay = (props) => (
  <Container className="text-overlay-container">
    <SectionHeading>{props.heading}</SectionHeading>
    <Row>
      <Col>
        {props.children}
      </Col>
    </Row>
  </Container>
)

export default TextOverlay;
