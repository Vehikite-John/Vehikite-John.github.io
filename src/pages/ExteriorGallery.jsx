import React from 'react'
import ImageGallery from 'react-image-gallery'
import { Container, Row, Col } from 'reactstrap'
import SectionHeading from '../components/SectionHeading'
import exterior1 from '../assets/images/exterior/exterior1.jpg'
import exterior2 from '../assets/images/exterior/exterior2.jpg'
import exterior3 from '../assets/images/exterior/exterior3.jpg'
import ext1Thumb from '../assets/images/exterior/exterior1_tn.jpg'
import ext2Thumb from '../assets/images/exterior/exterior2_tn.jpg'
import ext3Thumb from '../assets/images/exterior/exterior3_tn.jpg'

const ExteriorGallery = (props) => {

  const images = [
    {
      original: exterior1,
      thumbnail: ext1Thumb,
    },
    {
      original: exterior2,
      thumbnail: ext2Thumb,
    },
    {
      original: exterior3,
      thumbnail: ext3Thumb,
    },
  ]
  return (
    <section>
      <SectionHeading>Exterior Gallery</SectionHeading>
      <ImageGallery items={images} lazyLoad />
    </section>
  )
}

export default ExteriorGallery;
