import React, { Fragment } from 'react'
import Img from 'react-image'
import Header from '../components/Header'
import VirtualGallery from './VirtualGallery'
import ExteriorGallery from './ExteriorGallery'
import EmployeeExperience from './EmployeeExperience'
import FloorPlans from './FloorPlans'
import GardenPath from './GardenPath'
import Footer from './Footer'

export default () => {
  return (
    <Fragment>
      <Header />
      <VirtualGallery />
      <ExteriorGallery />
      <EmployeeExperience />
      <FloorPlans />
      <GardenPath />
      <Footer />
    </Fragment>
  )
}
