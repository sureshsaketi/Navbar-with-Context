import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'
// import {
//   AboutPageContainer,
//   AboutImgAndHeadingContainer,
//   AboutHeading,
//   AboutImage,
// } from './StyledComponents'

const AboutImages = {
  lightImage: 'https://assets.ccbp.in/frontend/react-js/about-light-img.png',
  darkImage: 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png',
}

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImage = isDarkTheme
        ? AboutImages.darkImage
        : AboutImages.lightImage

      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : null

      const aboutHeadingClassName = isDarkTheme ? 'about-dark-heading' : null

      return (
        <>
          <Navbar />
          <div className={`AboutPageContainer ${aboutBgClassName}`}>
            <div className="AboutImgAndHeadingContainer">
              <img className="AboutImage" src={aboutImage} alt="about" />
              <h1 className={`AboutHeading ${aboutHeadingClassName}`}>About</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
