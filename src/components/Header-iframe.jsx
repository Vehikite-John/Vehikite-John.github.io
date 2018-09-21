import React from 'react';
import Img from 'react-image';
// import VisibilitySensor from 'react-visibility-sensor'
import logo from '../assets/images/calvano-logo.png'

export default () => (
  <header>
    <div class="banner-video">
      <iframe src="https://www.youtube.com/embed/JQwM1XkkGN8?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=XXlJXRXJhow" frameborder="0" allow="autoplay; encrypted-media" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
    <h1>
      <span>±23,372 RSF New Construction</span>
      <span>1075 Terra Bella Avenue, Mountain View, CA</span>
    </h1>
    <nav>
      <ul>
        <a href="#"><li>360° Tour</li></a>
        <a href="#"><li>Exterior Gallery</li></a>
        <a href="#"><li>Employee Experience</li></a>
        <a href="#"><li>Floor Plans</li></a>
        <a href="#"><li>Garden Path</li></a>
      </ul>
      <a href="https://www.calvano.com" target="_blank" rel="noreferrer noopener"><Img src={logo} alt="" /></a>
    </nav>
  </header>
)
