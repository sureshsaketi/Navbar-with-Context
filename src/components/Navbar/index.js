import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'
// import {
//   NavbarContainer,
//   LogoImage,
//   NavPage,
//   NavPagesContainer,
//   ListNavItem,
//   ThemeButtonContainer,
//   ThemeButton,
//   StyledLink,
// } from './StyledComponents'

const themeImages = {
  lightThemeLogo:
    'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png',
  darkThemeLogo:
    'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png',
  darkThemeButtonImage:
    'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
  lightThemeButtonImage:
    'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png',
}

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logoImage = isDarkTheme
        ? themeImages.darkThemeLogo
        : themeImages.lightThemeLogo
      const themeImage = isDarkTheme
        ? themeImages.darkThemeButtonImage
        : themeImages.lightThemeButtonImage

      const navbarBgClassName = isDarkTheme
        ? 'dark-nav-container-bg-color'
        : null

      const navItemColor = isDarkTheme ? 'dark-nav-color' : null

      return (
        <div className={`navbar-container ${navbarBgClassName}`}>
          <img className="logo-image" src={logoImage} alt="website logo" />

          <ul className="nav-page-container">
            <li className={`list-nav-item ${navItemColor}`}>
              <Link to="/" className={`styled-link ${navItemColor}`}>
                Home
              </Link>
            </li>

            <li className={`list-nav-item ${navItemColor}`}>
              <Link to="/about" className={`styled-link ${navItemColor}`}>
                About
              </Link>
            </li>
          </ul>
          <div className="theme-button-container">
            <button
              className="theme-button"
              type="button"
              data-testid="theme"
              onClick={toggleTheme}
            >
              <img className="logo-image" src={themeImage} alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
