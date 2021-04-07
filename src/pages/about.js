import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"

const Container = styled.div`
  ${tw`w-full flex flex-col font-mono pb-4`}
`
const Wrapper = styled.div`
  ${tw` w-full px-8`}
  margin: 0 auto;
`

const Header = tw.h1`
  text-4xl pt-8 mb-8
`

const Content = tw.p`
  text-xl
`
const OtherWrapper = styled.div`
  ${tw`w-full flex`}
`
const BackToOther = tw.p`
  text-xl pt-8 mr-4 hover:underline
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
        <OtherWrapper>
          <BackToOther>
            <Link to="/work/">&larr; Work</Link>
          </BackToOther>
          <BackToOther>
            <Link to="/form/">&larr; Contact</Link>
          </BackToOther>
        </OtherWrapper>
      </Wrapper>
    </Container>
  </Layout>
)
export default About
