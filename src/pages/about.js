import React from "react"
import { Link } from "gatsby"
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
  text-4xl pt-8 mb-8
`

const Content = tw.p`
  text-xl
`

const BackToWorkArrow = tw.p`
  text-xl pt-8
`

const About = () => (
  <Layout>
    <Container>
      <Wrapper>
        <Header>About</Header>
        <Content>
          I'm Thad. <br />
          <br /> I am a Web Developer in Melbourne, Victoria. Helping customers
          with an online presence by building blazing fast websites and web
          apps, as well as helping with the design process. I use JS, Ruby.
          ReactJS and GatsbyJS with Styled Components and Tailwind on Front End.
          Ruby on Rails on the backend.{" "}
        </Content>
        <BackToWorkArrow>
          <Link to="/work/">&larr; Work</Link>
        </BackToWorkArrow>
      </Wrapper>
    </Container>
  </Layout>
)
export default About
