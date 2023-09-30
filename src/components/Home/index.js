import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import {
  HomePageContainer,
  HomeImgAndHeadingContainer,
  HomeHeading,
  HomeImage,
} from './StyledComponents'

const HomeImages = {
  lightImage: 'https://assets.ccbp.in/frontend/react-js/home-light-img.png',
  darkImage: 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png',
}

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImage = isDarkTheme
        ? HomeImages.darkImage
        : HomeImages.lightImage
      return (
        <>
          <Navbar />
          <HomePageContainer isDarkTheme={isDarkTheme}>
            <HomeImgAndHeadingContainer>
              <HomeImage src={homeImage} alt="home" />
              <HomeHeading isDarkTheme={isDarkTheme}>Home</HomeHeading>
            </HomeImgAndHeadingContainer>
          </HomePageContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
