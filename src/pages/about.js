import React from "react"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"

const Container = styled.div`
  ${tw`h-screen w-full flex flex-col`}
`
const Wrapper = styled.div`
  ${tw` w-4/5`}
  margin: 0 auto;
  height: 70%;
`

const Header = tw.h1`
  text-3xl pt-8 mb-8
`

const Content = tw.p`
  text-lg 
`

const About = () => (
  <Layout>
    <Container>
      <Wrapper>
        <Header>About</Header>
        <Content>
          I'm Thad. I am a Web Developer in Melbourne, Victoria. Helping
          customers with an online presence by building blazing fast websites
          and web apps, as well as helping with the design process. I use JS,
          Ruby. ReactJS and GatsbyJS with Styled Components and Tailwind on
          Front End. Ruby on Rails on the backend.{" "}
        </Content>
      </Wrapper>
    </Container>
  </Layout>
)
export default About
