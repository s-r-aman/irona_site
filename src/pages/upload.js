import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Flex, Text, Container, Button, Heading } from "../components/styles"
import Layout from "../components/layout"
import { post } from "axios"
const Child1 = styled.div`
  flex: 1;
  height: 100%;
  > input {
    /* height: ; */
    border: dashed 2px;
    padding: 250px 50px;
  }
`
const Child2 = styled.div`
  flex: 1;
`
export default function Upload() {
  const [file, setFile] = React.useState(null)
  const [state, setState] = React.useState({
    loading: false,
    analyzed: false,
    predictions: null,
    isCursed: false,
    err: null,
  })

  const normalizeState = () => {
    setFile(null)
    setState({
      loading: false,
      analyzed: false,
      predictions: null,
      isCursed: false,
      err: null,
    })
  }

  const onChange = e => {
    setFile(e.target.files[0])
  }
  const onFormSubmit = e => {
    setState({ ...state, loading: true })
    e.preventDefault() // Stop form submit
    fileUpload(file)
      .then(({ data: { predictions, isCursed } }) =>
        setState({ loading: false, analyzed: true, predictions, isCursed })
      )
      .catch(err => {
        setState({ loading: false, analyzed: false, err })
      })
  }
  const fileUpload = file => {
    const url = "http://localhost:3000/upload"
    const formData = new FormData()
    formData.append("image", file)
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    }

    return post(url, formData, config)
  }
  return (
    <Layout>
      {!state.analyzed && !state.loading && (
        <Container>
          <Flex m="60px 0 0 0" h="500px">
            <Child1>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png,
          image/jpeg"
                onChange={onChange}
              />
            </Child1>

            <Child2>
              <Heading fs="50px">Let's Get Started!</Heading>
              <Text m="20px 0 0 0">To get started, Upload the image here!</Text>
              <Text m="20px 0 0 0">
                Irona Use State of the art Machine Learning Model that has been
                trained over thousand of Images and Tested over and over again.
              </Text>
              <Button m="50px 0 0 0" onClick={onFormSubmit}>
                Submit
              </Button>
            </Child2>
          </Flex>
        </Container>
      )}
      {state.loading && (
        <Container>
          <Text fs="30px" center m="200px 0px">
            Wait, Irona is analyzing the Image...
          </Text>
        </Container>
      )}
      {state.analyzed && !state.loading && (
        <Container>
          <Heading fs="50px" m="50px 0px 0px 0px">
            Result:
          </Heading>
          <Text>
            There {state.isCursed ? "is" : "is no"} pneumonia{" "}
            {state.isCursed &&
              `with ${Math.floor(state.predictions[1] * 100)}% accuracy.`}
            .{" "}
          </Text>
          <Button m="50px 30px 0px 0px" onClick={normalizeState}>
            Do It Again!
          </Button>
          {/* <Link to="learn">
            <Button>Learn More</Button>
          </Link> */}
        </Container>
      )}
    </Layout>
  )
}
