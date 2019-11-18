import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import pic from "./../images/irona_1.png"
import { Flex, Heading, Text, Button, Container } from "../components/styles"

const Child1 = styled.div`
  flex: 1;
`

const Child2 = styled.div`
  flex: 2;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Hey!" />
    <Container>
      <Flex m="40px 0px">
        <Child1>
          <img src={pic} />
        </Child1>
        <Child2>
          <Heading m="50px 0 0 0" fs="50px">
            Hey There! My Name is Irona!
          </Heading>
          <Text m="40px 0px 0px 0px" fs="50px">
            I am a <em>VIRTUAL DIAGNOSTICIAN</em>.
          </Text>
          <Text fs="40px" m="0px 0px 50px 0px">
            I will analyse the lungs and Give you a report on it.
          </Text>
          <Link to="/upload">
            <Button> Get Started</Button>
          </Link>
        </Child2>
      </Flex>
    </Container>
  </Layout>
)

export default IndexPage
