import styled from "styled-components"
import { lighten } from "polished"
import media from "./media"
import { colorSecondary } from "./variables"

export const Container = styled.div`
  max-width: ${({ w = "1400px" }) => w};
  width: 90%;
  margin: ${({ m = "0 auto" }) => m};
  display: ${({ flex }) => (flex ? "flex" : "block")};
  padding: ${({ p }) => p || 0};
  z-index: ${({ zi = "0" }) => zi};
  ${media.phone`
    flex-direction: column;
  `};
  /* @media only screen and (max-width: 1000px) {
    flex-direction: column;
  } */
`

export const Flex = styled.div`
  flex: ${({ flex }) => flex || 0};
  display: flex;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "inherit"};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  justify-content: ${({ justify }) => justify || "default"};
  align-items: ${({ align }) => align || "default"};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "no-wrap")};
  ${({ extra }) => extra || ""};
  ${media.phone`
    flex-direction: column;
    ${({ res = "" }) => res}
  `};
`
export const Div = styled.div`
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
`

export const Wrapper = styled.div`
  width: ${({ width = "100%" }) => width};
  max-width: ${({ w }) => w || "auto"};
  height: ${({ h }) => h || "auto"};
  margin: ${({ m = "0 auto" }) => m};
  padding: ${({ p = 0 }) => p};
  flex: ${({ flex }) => flex || "auto"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "no-wrap")};
  text-align: ${({ center }) => (center ? "center" : "left")};
  ${media.phone`
    ${({ res = "" }) => res}
  `};
`

export const Filler = styled.div`
  height: ${({ h }) => h || "120px"};
  width: 100%;
`

export const Background = styled.div`
  background: linear-gradient(to right, ${({ gradient }) => gradient});
  padding: ${({ p }) => p || "0px 0px"};
  /* min-height: ${({ mh }) => mh || "70vh"}; */
`

export const BackgroundNormal = styled.div`
  background: ${lighten(0.56, colorSecondary)};
  min-height: 100vh;
  z-index: -10;
`
