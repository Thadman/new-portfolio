import React from "react"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Heading = tw.h1`
  text-3xl font-mono text-black px-8 
`

const Paragraph = tw.h5`
  text-black text-xl px-8 pt-4
`

const Container = tw.div`
  h-screen bg-gray-200 flex flex-col justify-start pt-10
`
const Wrapper = tw.div`
   w-full
`

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Hi, I'm Thad. I'm a Dev</Heading>
          <Paragraph>
            <Link to="/work/">Look at my work &rarr;</Link>
          </Paragraph>
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default HomePage
