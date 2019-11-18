import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Container, Flex, StyledLink } from "./styles"

const Title = styled.h1`
  font-size: 60px;
  margin: 0;
  > a {
    text-decoration: none;
    color: var(--colorPrimary);
  }
  text-transform: uppercase;
  flex: 3;
`

const StyledHeader = styled.header`
  padding: 30px 0px;
  opacity: 0.95;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
`

const NavBar = styled.nav`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Flex>
        <Title>
          <Link to="/">{siteTitle}</Link>
        </Title>
        {/* <NavBar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/learn">Learn More</StyledLink>
        </NavBar> */}
      </Flex>
    </Container>
  </StyledHeader>
)

export default Header
