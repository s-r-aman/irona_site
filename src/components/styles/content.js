import styled, { css } from "styled-components"
import { fontPrimary, fontSecondary, media } from "./index"

export const Image = styled.img`
  height: ${({ h }) => h || "auto"};
  width: ${({ w }) => w || "auto"};
  border-radius: ${({ round, roundness }) =>
    round ? "50%" : roundness || "0"};
  box-shadow: ${({ bs }) => bs || "0px 3px 6px rgba(0, 0, 0, 0.21)"};
  padding: ${({ p }) => p || "auto"};
  ${({ extra = "" }) => extra} ${media.phone`
    width: ${({ resW }) => resW || "auto"};
    height:  ${({ resH }) => resH || "inherit"};
    ${({ res = "" }) => res}
  `};
`

export const H1 = styled.h1`
  font-family: ${({ secondary }) => (secondary ? fontSecondary : fontPrimary)};
  margin: ${({ m = 0 }) => m};
  padding: ${({ p = 0 }) => p};
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-size: ${({ fs }) => fs || "var(--fontSizeH1)"};
  color: ${({ colorPrimary }) =>
    colorPrimary ? "var(--colorPrimary)" : "var(--colorWhite)"};
  ${media.phone`
  // font-size: ${({ resFs }) => resFs};
    ${({ res = "" }) => res};
  `};
`

export const headingCss = fs => css`
  font-family: ${({ secondary }) => (secondary ? fontSecondary : fontPrimary)};
  font-size: ${({ fs }) => fs || "35px"};
  margin: ${({ m = 0 }) => m};
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: ${({ col }) => col || "var(--colorPrimary)"};
  line-height: ${({ lh = "normal" }) => lh};
  ${media.phone`
    font-size: ${({ resFs }) => resFs || "inherit"};
    ${({ res = "" }) => res};
  `};
`

export const Heading = styled.h2`
  font-family: ${({ secondary }) => (secondary ? fontSecondary : fontPrimary)};
  font-size: ${({ fs }) => fs || "35px"};
  margin: ${({ m = 0 }) => m};
  text-align: ${({ center }) => (center ? "center" : "left")};
  color: ${({ col }) => col || "var(--colorPrimary)"};
  line-height: ${({ lh = "normal" }) => lh};
  ${media.phone`
    font-size: ${({ resFs }) => resFs || "inherit"};
    ${({ res = "" }) => res};
  `};
`

export const textCss = css`
  font-family: ${({ primary }) => (!primary ? fontSecondary : fontPrimary)};
  font-weight: ${({ fw = "normal" }) => fw};
  letter-spacing: ${({ ls = "normal" }) => ls};
  font-size: ${({ fs }) => fs || "25px"};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  text-align: ${({ center, ta = "left" }) => (center ? "center" : ta)};
  color: ${({ col }) => col || "rgba(0, 0, 0, 0.7)"};
  line-height: ${({ lheight, lh }) => lheight || lh || 1.5};
  width: ${({ w }) => w || "auto"};
  ${media.phone`
    ${({ res = "" }) => res}
  `};
`

export const Text = styled.p`
  ${textCss}
`

export const List = styled.ul`
  > li {
    font-family: ${({ secondary }) =>
      secondary ? fontSecondary : fontPrimary};
    font-weight: ${({ fw = "normal" }) => fw};
    letter-spacing: ${({ ls = "normal" }) => ls};
    font-size: ${({ fs }) => fs || "16px"};
    margin: ${({ m }) => m || 0};
    padding: ${({ p }) => p || 0};
    text-align: ${({ center }) => (center ? "center" : "left")};
    color: ${({ col }) => col || "var(--colorWhite)"};
    line-height: ${({ lheight }) => lheight || 1};
    width: ${({ w }) => w || "auto"};
    ${media.phone`
      ${({ res = "" }) => res}
    `};
  }
`
