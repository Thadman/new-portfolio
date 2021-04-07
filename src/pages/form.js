import tw, { styled } from "twin.macro"
import React, { useState } from "react"
import { Link } from "gatsby"

const Container = tw.div`
  w-screen h-screen flex justify-center bg-gray-100
`
const Wrapper = tw.div`
  lg:grid grid-cols-3 grid-rows-1 gap-2 bg-gray-100 w-11/12 pt-4 
`
const Grid1 = tw.div`
  px-1
`
const Header = tw.h2`
  text-xl tracking-wide font-mono py-4 px-4
`
const Content = tw.p`
  text-sm px-4
`
const Grid2 = tw.div`
  col-span-2 text-xl font-mono tracking-wide font-mono px-4 py-4 
`
const Div = tw.div`
  px-4 py-5 bg-white space-y-6 rounded-md border
`
const FormWrapper = styled.form`
  ${tw`w-11/12 flex justify-center flex-wrap flex-col mt-4 my-4`}
  margin: 0 auto;
`
const Label = tw.label`
  text-sm font-medium text-gray-700 rounded-md
`
const Input = tw.input`
  w-11/12 border border-gray-300 mt-1 mb-1 rounded-md shadow-sm px-2
`
const Textarea = tw.textarea`
  rounded-md shadow-sm border border-gray-300 mt-1 w-11/12 lg:h-32 px-2
`
const Button = tw.button`
  w-4/12 border border-gray-300 mt-6 rounded-md shadow-sm text-sm
`

const HeaderWrapper = styled.div`
  ${tw`w-full flex`}
`
const BackToOther = tw.p`
  text-xl pt-8 mr-4 hover:underline px-4
`

const Contact = () => {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    phoneNumber: "",
    message: "",
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setContact({
      ...contact,
      [name]: value,
    })
  }

  const handleReset = () => {
    setContact({
      fName: "",
      lName: "",
      phoneNumber: "",
      message: "",
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleReset()
    console.log({ contact })
  }

  return (
    <Container>
      <Wrapper>
        <Grid1>
          <Header>Contact Me &rarr;</Header>
          <Content>
            Fill in the form below and i will be in contact shortly
          </Content>
          <HeaderWrapper>
            <BackToOther>
              <Link to="/about/">&larr; About</Link>
            </BackToOther>
            <BackToOther>
              <Link to="/work/">&larr; Work</Link>
            </BackToOther>
          </HeaderWrapper>
        </Grid1>
        <Grid2>
          <Div>
            <FormWrapper onSubmit={handleSubmit}>
              <Label>First Name</Label>
              <Input
                type="text"
                onChange={handleChange}
                value={contact.fName}
                name="fName"
              />
              <Label>Last Name</Label>
              <Input
                type="text"
                onChange={handleChange}
                value={contact.lName}
                name="lName"
              />
              <Label>Phone Number</Label>
              <Input
                type="text"
                onChange={handleChange}
                value={contact.phoneNumber}
                name="phoneNumber"
              />
              <Label>About</Label>
              <Textarea
                type="text"
                onChange={handleChange}
                value={contact.message}
                name="message"
              />
              <Button>Submit</Button>
            </FormWrapper>
          </Div>
        </Grid2>
      </Wrapper>
    </Container>
  )
}
export default Contact
