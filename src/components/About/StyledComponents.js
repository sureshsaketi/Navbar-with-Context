import styled from 'styled-components'

export const AboutPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : null)};
`
export const AboutImgAndHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AboutHeading = styled.h1`
  font-family: 'roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#171f46')};
`
export const AboutImage = styled.img`
  height: 120px;
  width: 120px;
`
