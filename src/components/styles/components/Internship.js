import styled from 'styled-components'
import { fontPrimary, colorBlack, fontSecondary } from './../variables'
import { lighten } from 'polished'

export const Lorem = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export const Category = styled.h2`
  font-family: ${fontPrimary};
  margin: 0;
  font-size: 50px;
  letter-spacing: -1px;
  color: ${lighten(0.2, colorBlack)};
`

export const Company = styled.h3`
  font-family: ${fontSecondary};
  margin: 30px 0 0 0;
  font-size: 35px;
  letter-spacing: -1px;
  color: ${lighten(0, colorBlack)}
  > span {
    font-size: 20px;
    color: ${lighten(0.2, colorBlack)};
  }
`

export const Description = styled.p`
  font-family: ${fontSecondary};
  margin: 20px 0 0 0;
  font-size: 18px;
  text-align: justify;
`

export const Detail = styled.h5`
  font-family: ${fontSecondary};
  margin: 30px 0 0 0;
  font-size: 20px;
  font-weight: 700;
  > p {
    margin: 0px 0 0 5px;
    font-size: 18px;
    display: inline-block;
    font-weight: 300;
    &:first-child {
      margin: 0px 0 0 20px;
    }
  }
`
export const LabelHeading = styled.h5`
  font-family: ${fontSecondary};
  margin: 30px 0 0 0;
  color: ${colorBlack};
  font-weight: 100;
  font-size: 20px;
  text-align: left;
`

export const Title = styled.h4`
  font-family: ${fontPrimary};
  margin: 0px 0 0 0;
  color: ${colorBlack};
  font-weight: bold;
  font-size: 35px;
  text-align: center;
`
