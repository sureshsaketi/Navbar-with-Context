import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import {
  NotFoundPageContainer,
  NotFoundImgAndHeadingContainer,
  NotFoundHeading,
  NotFoundImage,
  NotFoundText,
} from './StyledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <NotFoundPageContainer isDarkTheme={isDarkTheme}>
            <NotFoundImgAndHeadingContainer>
              <NotFoundImage
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Lost Your Way?
              </NotFoundHeading>
              <NotFoundText isDarkTheme={isDarkTheme}>
                We cannot seem to find the page you are looking for.
              </NotFoundText>
            </NotFoundImgAndHeadingContainer>
          </NotFoundPageContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
