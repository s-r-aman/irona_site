import styled, { keyframes, css } from "styled-components"
import { lighten, darken } from "polished"
import { Link } from "gatsby"
import {
  fontPrimary,
  colorPrimary,
  colorBlack,
  colorPrimaryShade,
} from "./index"
import { colorWhite, fontSecondary, colorPrimaryOver } from "./variables"

export const A = styled.a`
  text-decoration: none;
  font-size: ${({ fs }) => fs || "18px"};
  font-family: ${fontSecondary};
  padding: ${({ p }) => p || 0};
  transition: padding 0.2s ease-out;
  transition: color 0.15s ease-in;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.95);
  display: inline;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  ${({ extra = "" }) => extra};
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ fs }) => fs || "18px"};
  font-family: ${fontPrimary};
  padding: ${({ p }) => p || 0};
  transition: padding 0.2s ease-out;
  transition: color 0.15s ease-in;
  cursor: pointer;
  color: black;
  &:after {
    content: " ";
    display: block;
    width: 0;
    height: 2px;
    background: ${colorBlack};
    transition: width 0.15s ease-in;
  }
  &:hover {
    &:after {
      background: #052391;
      width: 100%;
    }
    color: #052391;
  }
  ${({ extra = "" }) => extra};
`
export const linkCss = css`
  font-size: 16px;
  font-family: ${fontSecondary};
  color: ${({ col = " var(--colorWhite)" }) => col};
  text-decoration: none;

  &:hover {
    &:after {
      width: ${({ logo }) => (logo ? 0 : "100%")};
    }
  }
`
export const StyledLink = styled(Link)`
  font-size: 30px;
  font-family: ${fontSecondary};
  color: var(--colorPrimary);
  text-decoration: none;
  opacity: 0.85;
  transition: all 0.2s ease-out;
  /* font-size: ${({ fs = "16px" }) => fs}; */
  &:hover {
    opacity: 1;
  }
`

export const Button = styled.button`
  padding: ${({ p }) => p || "15px 30px"};
  border-radius: 5px;
  background: var(--colorPrimary);
  transition: all 0.3s ease-out;
  font-family: ${fontSecondary};
  font-size: 30px;
  font-weight: ${({ bold }) => bold || "normal"};
  color: ${({ col }) => col || colorWhite};
  cursor: pointer;
  margin: ${({ m = 0 }) => m};
  line-height: ${({ lh }) => lh || 1};
  opacity: 0.9;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: 0.2s all ease-in-out;
  &:hover {
    opacity: 1;
    color: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px) scale(1.01);
  }
  &:disabled {
    opacity: 0.5;
  }
`

export const Btn = styled.button`
  border: solid ${({ bold }) => (bold ? "2px" : "1px")}
    ${({ bc }) => bc || colorPrimary};
  padding: ${({ p }) => p || "10px 30px"};
  border-radius: 30px;
  background: none;
  transition: all 0.3s ease-out;
  font-family: ${fontPrimary};
  font-size: ${({ fs = "15px" }) => fs};
  font-weight: ${({ bold }) => bold || "normal"};
  color: ${({ col }) => col || colorPrimary};
  cursor: pointer;
  margin: ${({ m = 0 }) => m};
  transition: 0.2s all ease-in-out;
  &:hover {
    background: ${({ colBg }) => colBg || colorPrimary};
    border-color: ${({ colBg }) => colBg || colorPrimary};
    color: #fff;
    box-shadow: 0 5px 7px ${({ sCol = lighten(0.4, colorPrimary) }) => sCol};
  }
  &:disabled {
    opacity: 0.5;
  }
`

const loadingAnimation = keyframes`
  from {
    background-position: 0 0;
  }
  to {
    background-position: 2rem 4rem;
  }
`

export const HR = styled.hr`
  margin: ${({ m = "20px 0px" }) => m};
  background: var(--colorPrimary);
  opacity: ${({ o = "0.1" }) => o};
  height: ${({ h = "inherit" }) => h};
`

export const SecondaryButton = styled.button`
  border: none;
  font-family: ${fontPrimary};
  font-size: var(--textSize);
  color: ${({ col = "#fff" }) => col};
  background: ${({ bg = colorPrimary }) => bg};
  cursor: pointer;
  padding: ${({ p }) => p || "13px 40px"};
  display: inline-block;
  letter-spacing: 1px;
  text-align: center;
  font-weight: ${({ bold }) => bold || "normal"};
  outline: none;
  position: relative;
  box-shadow: 0 2px 3px ${({ sCol = colorPrimaryShade(0.2) }) => sCol};
  border-radius: 50px;
  margin: ${({ m = 0 } = {}) => m};
  transition: 0.2s all ease-in-out;
  background-size: 2rem 2rem;
  background-image: ${({ loading }) =>
    loading
      ? "linear-gradient(135deg, rgba(0, 0, 0, 0.3) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 75%, transparent)"
      : "none"};
  animation: 2.8s  linear 0s infinite normal none running ${({ loading }) =>
    loading ? loadingAnimation : "none"}
  &:hover {
    box-shadow: 0 5px 7px ${({ sCol = lighten(0.4, colorPrimary) }) => sCol};
    background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.3) 75%, transparent 75%, transparent);
    animation: 2.8s  linear 0s infinite normal none running ${loadingAnimation};
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const bdCss = (
  percentage = "75%",
  position = "center",
  shape = "circle"
) => css`
  background: radial-gradient(
    ${shape} at ${position},
    ${darken(0.2, "rgba(141,121,61,1)")} 0%,
    rgba(0, 0, 0, 0) ${percentage}
  );
`
