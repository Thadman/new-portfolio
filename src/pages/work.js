import React from "react"
import tw, { styled } from "twin.macro"
import Layout from "../components/layout"
import data from "../data/data"

console.log(data)

const Container = tw.div`
  h-screen w-full flex flex-col 
`
const Wrapper = styled.div`
  ${tw` w-4/5 grid grid-cols-3 gap-4`}
  margin: 0 auto;
`
const Header = styled.h1`
  ${tw`text-3xl pt-8 px-8 mb-8`}
  padding-left: 10%
`
const Card = styled.div`
  ${tw`flex flex-col flex-wrap rounded-md shadow-xl border-2 border-gray-300`}
  height: 100%;
  margin: 0 auto;
`
const CardHeader = tw.h1`
  text-3xl pt-4 px-4
`
const CardContent = tw.p`
  text-sm px-4 pt-2
`
const Button = tw.button`
  mt-6 p-2 pl-4 text-left border-t-2 border-b-2 border-gray-300 
`

const Work = () => {
  return (
    <Layout>
      <Container>
        <Header>Work</Header>
        <Wrapper>
          {data.map((item, index) => (
            <Card key={index}>
              <CardHeader>{item.title}</CardHeader>
              <CardContent>{item.content}</CardContent>
              <Button onClick={() => alert("hello")}>View Site</Button>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default Work
