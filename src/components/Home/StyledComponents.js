import styled from 'styled-components'

export const HomePageContainer = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : null)};
`
export const HomeImgAndHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HomeHeading = styled.h1`
  font-family: 'roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#171f46')};
`
export const HomeImage = styled.img`
  height: 120px;
  width: 120px;
`
