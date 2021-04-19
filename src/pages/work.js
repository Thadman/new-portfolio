import React, { useState } from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Layout from "../components/layout"
import data from "../data/data"

console.log(data)

const Container = tw.div`
 w-full flex flex-col bg-gray-100 font-mono
`
const Wrapper = styled.div`
  ${tw`grid lg:grid-cols-3 gap-4 px-4 md:grid-cols-2 gap-4 sm:grid grid-cols-1 gap-4`}
  margin: 0 auto;
`
const HeaderWrapper = styled.div`
  ${tw`w-full flex flex-wrap`}
`
const Header = styled.h1`
  ${tw`text-3xl pt-8 px-8 mb-8 hover:underline`}
`
const Card = styled.div`
  ${tw`flex flex-col justify-between  rounded-md shadow-xl border-2 border-gray-300 mb-4`};
`
const CardDiv = tw.div`
`
const CardHeader = tw.h1`
  text-xl px-4 pt-1
`
const CardContent = tw.p`
   px-4 pt-2 flex-wrap text-sm
`
const ButtonDiv = styled.div``
const Button = styled.button`
  ${tw`mt-6 p-2 pl-4 text-left border-t-2 border-b-2 border-b-2 border-gray-300 hover:bg-gray-200`};
  width: 100%;
`
const Footer = styled.div`
  ${tw`w-full border-t-2 border-b-2 border-gray-300 text-3xl flex justify-center items-center self-end p-4 bg-gray-100`}
`
const Icon = tw.img`
  h-10 mr-4
`

const logos = [
  {
    name: "github",
    logo: require("../images/github.svg"),
    link: "https://github.com/Thadman",
  },
  {
    name: "linkedin",
    logo: require("../images/linkedin.jpeg"),
    link: "https://www.linkedin.com/in/thad-hoskin-4175aa1b1/",
  },
]

const Work = () => {
  return (
    <Layout>
      <Container>
        <HeaderWrapper>
          <Header>Work</Header>
          <Header>
            <Link to="/about/">About</Link>
          </Header>
          <Header>
            <Link to="/form/">Contact</Link>
          </Header>
        </HeaderWrapper>
        <Wrapper>
          {data.map((item, index) => (
            <Card key={index}>
              <CardDiv>
                <CardHeader>{item.title}</CardHeader>
                <CardContent>{item.content}</CardContent>
              </CardDiv>
              <ButtonDiv>
                <Button onClick={() => alert("Good work")}>View Site</Button>
              </ButtonDiv>
            </Card>
          ))}
        </Wrapper>
        <Footer>
          {logos.map(({ name, logo }, index) => (
            <Icon src={logo} alt={name} key={index} />
          ))}
        </Footer>
      </Container>
    </Layout>
  )
}

export default Work
