import React from 'react'
import { Row, Col } from 'reactstrap'

const SectionHeading = (props) => {
  return (
      <Row className="section-heading-container">
        <Col>
          <h2>
            <span>{props.children}</span>
            {/* TODO: add icon based on icon prop
              icon could be the content string */}
            {/* <i class="fas fa-images"></i> */}
          </h2>
        </Col>
      </Row>
  )
}

export default SectionHeading;
