import ThemeContext from '../../context/ThemeContext'

import {
  NavbarContainer,
  LogoImage,
  NavPage,
  NavPagesContainer,
  ListNavItem,
  ThemeButtonContainer,
  ThemeButton,
  StyledLink,
} from './StyledComponents'

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
      return (
        <NavbarContainer isDarkTheme={isDarkTheme}>
          <LogoImage src={logoImage} alt="website logo" />

          <NavPagesContainer>
            <ListNavItem>
              <StyledLink to="/">
                <NavPage isDarkTheme={isDarkTheme}>Home</NavPage>
              </StyledLink>
            </ListNavItem>

            <ListNavItem>
              <StyledLink to="/about">
                <NavPage isDarkTheme={isDarkTheme}>About</NavPage>
              </StyledLink>
            </ListNavItem>
          </NavPagesContainer>
          <ThemeButtonContainer>
            <ThemeButton type="button" onClick={toggleTheme}>
              <LogoImage src={themeImage} alt="theme" />
            </ThemeButton>
          </ThemeButtonContainer>
        </NavbarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
