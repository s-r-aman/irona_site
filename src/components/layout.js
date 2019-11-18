/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"
import { Normalize, A, Text } from "./styles"

const Background = styled.div`
  background: rgb(232, 232, 232);
  height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Background>
      <Normalize />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <Text center fs="20px">
            © {new Date().getFullYear()}, Built with
            {` `}
            <A href="https://www.gatsbyjs.org">Gatsby</A>
          </Text>
        </footer>
      </div>
    </Background>
  )
}

export default Layout
