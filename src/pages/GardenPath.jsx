import React from 'react'
// import ImageGallery from 'react-image-gallery'
import { Container, Row, Col } from 'reactstrap'
import SectionHeading from '../components/SectionHeading'
import TextOverlay from '../components/TextOverlay'

const  GardenPath = (props) => {

  // const images = [
  //   {
  //     original: gardenPath1,
  //   },
  //   {
  //     original: gardenPath2,
  //   },
  // ]
  return (
    <section className="bg-card garden-path">
      <ul class="cb-slideshow">
      	<li>
      		<span>Image 01</span>
      	</li>
        <li>
      		<span>Image 02</span>
      	</li>
      </ul>
      <TextOverlay heading="Garden Path">
        <p>The design experience may include the garden path. The garden path begins outside, leading into the lobby and continuing to weave throughout the workplace. The path evolves vertically to the second floor creating a beautiful journey while tantalizing the senses and cultivating a work environment to enhance the employee experience.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in sem ante. Suspendisse iaculis tincidunt odio, at eleifend libero egestas in. Nunc euismod convallis rutrum. Vivamus purus eros, vestibulum id dolor vel, suscipit faucibus purus. Praesent a ornare lorem, nec varius dolor. Proin tincidunt vehicula pretium. Integer in risus malesuada, tincidunt augue ac, sagittis urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc quis quam ornare, porttitor eros vel, pharetra ligula. Etiam finibus odio lacus, accumsan dictum felis varius eu. Fusce aliquet efficitur turpis at laoreet. Fusce pulvinar sapien non arcu ullamcorper vestibulum. Fusce ut tortor dignissim, ullamcorper metus a, ullamcorper dolor. Aenean placerat, turpis eu fermentum tempor, risus nibh ultricies enim, nec commodo metus enim vitae ex.</p>
        <p>Vivamus in metus sed ligula varius pellentesque nec et tellus. Nullam dictum ex sed velit sollicitudin, eu rutrum justo iaculis. Pellentesque scelerisque ante vel nulla pharetra fermentum. Vestibulum congue faucibus varius. Curabitur tincidunt a tortor id porta. Donec lobortis ac libero sodales venenatis. Fusce est diam, pretium in ligula sit amet, convallis pulvinar risus. Vestibulum mollis nec urna non tristique. Duis luctus vestibulum sem, convallis suscipit lacus commodo vitae. Duis consequat ullamcorper magna ornare rutrum.</p>
        <p>Sed vitae consectetur enim. Integer sem mauris, auctor et vestibulum tempus, mollis et massa. Phasellus eget lobortis arcu. Morbi nec porttitor tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque nibh dolor, imperdiet et erat sit amet, ultricies tincidunt ante. Donec consectetur orci erat, nec egestas erat elementum in. Sed tempus sodales velit sit amet viverra. Aliquam erat volutpat. Phasellus et vestibulum lacus. Nam efficitur pretium neque sed fringilla. Cras ullamcorper, arcu sed accumsan scelerisque, ante quam euismod erat, et ultricies velit quam ut orci. Maecenas vestibulum ex ac orci imperdiet, sit amet dignissim massa porttitor. Curabitur volutpat arcu bibendum ultrices commodo. Cras vitae iaculis risus.</p>
        <p>Nunc scelerisque augue nec ullamcorper euismod. Mauris vitae libero ipsum. Nullam sagittis facilisis posuere. Phasellus vitae blandit dui. Curabitur vel ultrices nisi. Maecenas at dignissim lectus. Proin consectetur lorem eu turpis efficitur tristique. Praesent dui est, pretium vitae purus in, pretium interdum nunc. Etiam fermentum orci non erat finibus, id egestas dui sagittis. Praesent tristique, metus vel iaculis congue, libero odio porttitor felis, nec commodo mi nisi eu orci.</p>
      </TextOverlay>
      {/* <SectionHeading>Garden Path</SectionHeading>
      <Container>
        <Row>
          <Col>
            <p>The design experience may include the garden path. The garden path begins outside, leading into the lobby and continuing to weave throughout the workplace. The path evolves vertically to the second floor creating a beautiful journey while tantalizing the senses and cultivating a work environment to enhance the employee experience.</p>
          </Col>
        </Row>
      </Container> */}
      {/* <ImageGallery
        items={images}
        showNav={false}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        autoPlay={true}/> */}
    </section>
  )
}

export default  GardenPath;
