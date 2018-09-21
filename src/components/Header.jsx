import React from 'react'
import Img from 'react-image'
import YouTube from 'react-youtube'
// import VisibilitySensor from 'react-visibility-sensor'
import logo from '../assets/images/calvano-logo.png'

// autoplay: 0,

export default () => {
  const opts = {
      height: '1',
      width: '1',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        autohide: 1,
        modestbranding: 0,
        rel: 0,
        showinfo: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 0,
        iv_load_policy: 3,
        loop: 1,
        width: "100%",
        height: "100%",
        frameborder: 0,
        playlist: "8HSr8BjcufM&amp",
        webkitallowfullscreen: true,
        mozallowfullscreen: true,
        allowfullscreen: true
      }
    };
  return (
    <header>
      <YouTube
        videoId="JQwM1XkkGN8"
        opts={opts}
        containerClassName="banner-video"
      />
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
}
