import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"
import Layout from "../components/layout"
import data from "../data/data"

console.log(data)

const Container = styled.div`
  ${tw`h-screen w-full flex flex-col`}
`
const Wrapper = styled.div`
  ${tw` w-10/12 grid lg:grid grid-cols-3 gap-4 md:grid-cols-2 gap-4 sm:grid grid-cols-1 gap-4`}
  margin: 0 auto;
`

const HeaderWrapper = styled.div`
  ${tw`w-full flex`}
`

const Header = styled.h1`
  ${tw`text-3xl pt-8 px-8 mb-8 hover:underline`}
  padding-left: 8.5%
`

const Card = styled.div`
  ${tw`flex flex-col flex-wrap justify-end rounded-md shadow-xl border-2 border-gray-300`};
  height: 100%;
`
const CardHeader = tw.h1`
  text-3xl px-4 
`
const CardContent = tw.p`
  text-sm px-4 pt-2 flex flex-wrap
`
const Button = styled.button`
  ${tw`mt-6 p-2 pl-4 text-left border-t-2 border-b-2 border-b-2 border-gray-300`}
`
const Footer = styled.footer`
  ${tw`w-full  border-t-2 border-b-2 border-gray-300 text-3xl flex justify-center items-center self-end p-4`}
  position: fixed;
  bottom: 0;
`

const Icon = tw.img`
  h-10 mr-4
`

const logos = [
  {
    name: "github",
    logo: require("../images/github.svg"),
  },
  {
    name: "linkedin",
    logo: require("../images/linkedin.jpeg"),
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
        </HeaderWrapper>
        <Wrapper>
          {data.map((item, index) => (
            <Card key={index}>
              <CardHeader>{item.title}</CardHeader>
              <CardContent>{item.content}</CardContent>
              <Button onClick={() => alert("hello")}>View Site</Button>
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
