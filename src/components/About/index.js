import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import {
  AboutPageContainer,
  AboutImgAndHeadingContainer,
  AboutHeading,
  AboutImage,
} from './StyledComponents'

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
      return (
        <>
          <Navbar />
          <AboutPageContainer isDarkTheme={isDarkTheme}>
            <AboutImgAndHeadingContainer>
              <AboutImage src={aboutImage} alt="about" />
              <AboutHeading isDarkTheme={isDarkTheme}>About</AboutHeading>
            </AboutImgAndHeadingContainer>
          </AboutPageContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
