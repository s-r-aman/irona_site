import React from 'react'
import ReactSelect from 'react-select'
import styled, { keyframes } from 'styled-components'
import { lighten } from 'polished'
import { fontSecondary, colorPrimary } from './variables'
import media from './media'

const loadingAnimation = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 2rem 4rem;
  }
`

const loadingColors = `linear-gradient(135deg, rgba(0, 0, 0, 0.5) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 75%, transparent 75%, transparent)`

export const Form = styled.form`
  text-align: center;
    > div {
      box-shadow: 0px 3px 5px hsla(0, 0%, 0%, 0.19);
      background: white;
      padding: 50px 50px 30px 50px;
      ${media.phone`
        padding: 20px 20px 60px 20px;      
      `}
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 5px;
      grid-template-rows: repeat(${({ repeatVal }) => repeatVal}, auto auto 20px );
    }
    > fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      &[disabled] {
        opacity: 0.5;
      }
      &::before {
        height: 7px;
        content: '';
        display: block;
        background: ${colorPrimary};
      }
      &[aria-busy='true']::before {
        background-image: ${loadingColors};
        background-size: 2rem 2rem; 
        animation: ${loadingAnimation} 2.8s  linear 0s infinite normal none running;
      }
    }
`

const commonMedia = media.phone`
  grid-column: 1/-1;
  grid-row: auto;
`

export const Error = styled.div`
  grid-column: ${({ gridcolumn = '1/-1' }) => gridcolumn};
  grid-row: ${({ gridrow = 'auto' }) => gridrow};
  > p {
    color: var(--errorRed);
    font-family: ${fontSecondary};
    font-size: var(--textSize);
    text-align: left;
    margin: 0 0 0 5px;
  }
  ${commonMedia}
`

export const ErrorComponent = ({ gridcolumn, children }) => (
  <Error gridcolumn={gridcolumn} >
    <p>{children}</p>
  </Error>
)

export const Label = styled.label`
  font-family: ${fontSecondary};
  font-size: var(--textSize);
  color: hsla(0, 0%, 0%, 0.5);
  text-align: left;
  > span {
    color: red;
  }
  grid-column: ${({ gridcolumn = '1/-1' }) => gridcolumn};
  grid-row: ${({ gridrow = 'auto' }) => gridrow};
  ${commonMedia}
`

export const Input = styled.input`
  padding: 10px 20px;
  line-height: 1;
  height:40px;
  font-family: ${fontSecondary};
  font-size: var(--textSize);
  border-radius: 50px;
  border: solid 1px hsla(0, 0%, 0%, 0.15);
  box-sizing: border-box;
  grid-column: ${({ gridcolumn = '1/-1' }) => gridcolumn};
  grid-row: ${({ gridrow = 'auto' }) => gridrow};
  ${commonMedia}
  &:focus {
    border: solid 2px var(--colorPrimary);
  }
`

const SelectInput = styled(ReactSelect)`
  grid-column: 1/-1;
  & .select__control {
    border-radius: 50px;
    min-height: 40px;
    .select__value-container {
        padding: 3px 9px;
      .select__placeholder {
        padding: 0 0 0 9px;
        font-size: var(--textSize);
        font-family: ${fontSecondary};
      }
      > div {
        & .select__input {
          > input {
            font-family: ${fontSecondary};
            font-size: var(--textSize);
          }
        }
      }
      .select__multi-value {
        border-radius: 50px;
        background: ${lighten(0.5, colorPrimary)};
        .select__multi-value__label {
          padding: 6px 0px 3px 13px;
          font-size: var(--textSize);
          font-family: ${fontSecondary};
        }
        .select__multi-value__remove {
          border-radius: 0px 50px 50px 0px;
          padding-left: 2px;
          margin-left: 2px;
          background: ${lighten(0.5, colorPrimary)};     
        }
      }
    }
  }
  & .select__menu {
    .select__menu-list {
      .select__option {
        font-size: var(--textSize);
        font-family: ${fontSecondary};
      }
    }
  }
`

export const Select = (props) => <SelectInput classNamePrefix='select' {...props} />
