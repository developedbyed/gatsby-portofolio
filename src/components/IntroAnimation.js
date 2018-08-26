import Lottie from 'react-lottie'
import React from 'react'
import animationData from '../img/data.json'
import animationData2 from '../img/contact.json'
import projectData from '../img/sleep.json'

export const LootieAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  const style = {
    animation: 'runningFrames 2.5s forwards 1s',
    opacity: 0,
  }

  return (
    <div className="animation-wrapper">
      <Lottie options={defaultOptions} height={200} width={200} style={style} />
    </div>
  )
}

export const ContactAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="contact-animation">
      <Lottie options={defaultOptions} height={200} width={300} />
    </div>
  )
}

export const ProjectAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: projectData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="project-animation">
      <Lottie options={defaultOptions} height={200} width={300} />
    </div>
  )
}
