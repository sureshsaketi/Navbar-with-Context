import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'
import './index.css'

// import {
//   HomePageContainer,
//   HomeImgAndHeadingContainer,
//   HomeHeading,
//   HomeImage,
// } from './StyledComponents'

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

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : null

      const homeHeadingClassName = isDarkTheme ? 'home-dark-heading' : null

      return (
        <>
          <Navbar />
          <div className={` home-page-container ${homeBgClassName}`}>
            <div className="home-img-and-heading-container">
              <img className="home-image" src={homeImage} alt="home" />
              <h1 className={`home-heading ${homeHeadingClassName}`}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
