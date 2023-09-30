import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

// import {
//   NotFoundPageContainer,
//   NotFoundImgAndHeadingContainer,
//   NotFoundHeading,
//   NotFoundImage,
//   NotFoundText,
// } from './StyledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgColorClassName = isDarkTheme ? 'dark-not-found-bg' : null

      const notFoundDarkText = isDarkTheme ? 'dark-text-color' : null

      return (
        <>
          <Navbar />
          <div className={`NotFoundPageContainer ${notFoundBgColorClassName}`}>
            <div className="NotFoundImgAndHeadingContainer">
              <img
                className="NotFoundImage"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className={`NotFoundHeading ${notFoundDarkText}`}>
                Lost Your Way?
              </h1>
              <p className={`NotFoundText ${notFoundDarkText}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
