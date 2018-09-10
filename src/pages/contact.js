import React from 'react'
import { ContactAnimation } from '../components/IntroAnimation'
import PageTransition from 'gatsby-plugin-page-transitions'


const ThirdPage = () => (
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
    <div className="contact-wrapper">
      <div className="project-title">
        <p className="p-title"> Contact </p>
      </div>
      <div className="form-wrapper">
        <form
          className="contact-form"
          action="https://formspree.io/simo.edwin@yahoo.com"
          method="POST"
        >
          <div>
            <label className="control-label"> Name</label>
            <input className="contact-input" type="text" name="name" required />
          </div>
          <div>
            <label className='control-label'> Email</label>
            <input
              className="contact-input"
              type="email"
              name="_replyto"
              required
            />
          </div>
          <div>
            <label> Description</label>
            <textarea className="contact-textarea" name="description" required />
          </div>
          <button className="contact-button" type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
      <ContactAnimation />
    </div>
  </PageTransition >
)

export default ThirdPage
