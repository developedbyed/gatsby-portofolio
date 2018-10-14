import React from 'react'
import ProjectBox from '../components/ProjectBox'
import swirl from '../img/swirl-website.jpg'
import tap from '../img/tap-music.jpg'
import wood from '../img/wood.png'
import weather from '../img/weather-app.jpg'
import { ProjectAnimation } from '../components/IntroAnimation'
import PageTransition from 'gatsby-plugin-page-transitions'

const SecondPage = () => (
  <PageTransition
    defaultStyle={{
      width: '100%',
      transition: 'opacity 0.5s ease',
      opacity: '0',
    }}
    transitionStyles={{
      entering: { opacity: '1' },
      entered: { opacity: '1' },
      exiting: { opacity: '0' },
    }}
    transitionTime={500}
  >
    <div className="project-wrapper">
      <div className="project-title">
        <p className="p-title"> Projects </p>
      </div>
      <div className="project-list">
        <ProjectBox
          visit="https://devedwin.github.io/wood-only/"
          title="Wood Only"
          image={wood}
          text="A store to please your interior design with high quality wood"
        />
        <ProjectBox
          visit="https://devedwin.github.io/Swirl-Website/"
          title="Swirl Website"
          image={swirl}
          text="Designed for a Photography program. This is the mockup version."
        />
        <ProjectBox
          visit="https://devedwin.github.io/tap-music/"
          title="Tap Music"
          image={tap}
          text="A web app for creating sick beats with some added visuals!"
        />
        <ProjectBox
          visit="https://devedwin.github.io/weather-app/"
          title="Weather App"
          image={weather}
          text="A geolocation based web app. Check it out in case you need an umbrella."
        />
      </div>
      <ProjectAnimation />
    </div>
  </PageTransition>
)

export default SecondPage
