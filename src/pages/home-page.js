import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Heading = tw.h1`
  text-3xl font-mono text-black px-8 
`

const Paragraph = tw.h5`
  text-black text-xl px-8
`

const Container = tw.div`
   h-screen bg-gray-200 flex flex-col justify-start pt-32
`
const Wrapper = tw.div`
   w-3/5
`

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Hi, I am Thad. I'm a Developer</Heading>
          <Paragraph>
            <Link to="/work/">Look at my work &rarr;</Link>
          </Paragraph>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default HomePage
