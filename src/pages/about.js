import React from "react"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"

const Container = styled.div`
  ${tw`h-screen w-full flex flex-col justify-center`}
`
const Wrapper = styled.div`
  ${tw` w-4/5`}
  margin: 0 auto;
  height: 70%;
`

const Header = tw.h1`
  text-3xl
`

const About = () => (
  <Layout>
    <Container>
      <Wrapper>
        <Header>About</Header>
      </Wrapper>
    </Container>
  </Layout>
)
export default About
