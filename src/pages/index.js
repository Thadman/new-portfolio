import tw, { styled } from "twin.macro"
import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

import github from "../images/github.svg"

const logos = [
  {
    name: "gatsby",
    logo: require("../images/gatsby.svg"),
  },
  {
    name: "tailwind",
    logo: require("../images/tailwind.svg"),
  },
  {
    name: "emotion",
    logo: require("../images/emotion.png"),
  },
]

const Wrapper = tw.div`
  flex items-center justify-center flex-col h-screen
`

const Main = tw.div`
  p-6 bg-gray-100 rounded-lg shadow-2xl
`

const Heading = tw.h1`
  text-2xl text-gray-500 uppercase
`

const Text = tw.p`
  text-xl text-gray-700
`

const Logos = tw.div`
  flex items-center justify-around mb-6 px-16
`

const Icon = tw.img`
  h-10
`
const Footer = tw.footer`
  mt-6 text-center
`
const SmallIcon = tw.img`
  inline-block h-6
`
const newFooter = styled.div`
  ${tw`w-full border-t-2 border-b-2 border-gray-300 text-3xl flex justify-center items-center self-end p-4 bg-gray-100`}
`

export default function Index() {
  return (
    <Layout>
      <Wrapper>
        <SEO title="Welcome" />
        <Main>
          <Heading>Hello</Heading>
          <Link to="/home-page/">Click here for the homepage &rarr;</Link>
        </Main>
      </Wrapper>
    </Layout>
  )
}
