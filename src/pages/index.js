import React from 'react'
import { Github, Youtube, Linkedin } from 'react-feather'
import { LootieAnimation } from '../components/IntroAnimation'
import PageTransition from 'gatsby-plugin-page-transitions'

const IndexPage = () => (
  <PageTransition
    defaultStyle={{
      opacity: '0',
      width: '100%',
      transition: 'opacity 0.5s ease',
    }}
    transitionStyles={{
      entering: { opacity: '1' },
      entered: { opacity: '1' },
      exiting: { opacity: '0' },
    }}
    transitionTime={500}
  >
    <div className="intro-wrapper">
      <div className="title-wrapper">
        <h1 className="title">Simo Edwin</h1>
        <h2 className="subtitle">Fullstack Web Developer</h2>
      </div>
      <div className="social-wrapper">
        <a href="https://github.com/devedwin" target="_blank">
          <Github color="#EFEFEF" size="48" className="social-links" />
        </a>
        <a href="https://www.youtube.com/c/DevEd" target="_blank">
          <Youtube color="#EFEFEF" size="48" className="social-links" />
        </a>
        <a
          href="https://www.linkedin.com/in/simo-edwin-57a25714b/"
          target="_blank"
        >
          <Linkedin color="#EFEFEF" size="48" className="social-links" />
        </a>
      </div>
      <LootieAnimation />
    </div>
  </PageTransition>
)

export default IndexPage
