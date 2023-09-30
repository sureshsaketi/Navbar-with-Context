import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: 'center';
  justify-content: space-between;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.12);
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#333333' : null)};
`

export const LogoImage = styled.img`
  height: 30px;
  width: 30px;
`

export const NavPagesContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  gap: 15px;
`
export const ListNavItem = styled.li`
  padding: 0;
  list-style-type: none;
`
export const NavPage = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#171f46')};
`
export const ThemeButtonContainer = styled.div`
  border: none;
  background-color: transparent;
`

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`
