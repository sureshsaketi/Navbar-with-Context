import styled from 'styled-components'

export const NotFoundPageContainer = styled.div`
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#000000' : null)};
`
export const NotFoundImgAndHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NotFoundHeading = styled.h1`
  font-family: 'roboto';
  color: ${props => (props.isDarkTheme ? '#dcdcdc' : '#333333')};
  text-align: center;
  font-size: 45px;
  font-weight: 400;
`
export const NotFoundImage = styled.img`
  height: 200px;
  width: 200px;
`
export const NotFoundText = styled.p`
  font-family: 'roboto';
  text-align: 'center';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#64748b')};
`
