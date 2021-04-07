import React from "react"
import tw, { styled } from "twin.macro"

const Wrapper = styled.div`
  ${tw`absolute h-32 w-20`}
`

const AlertBox = () => {
  return (
    <Wrapper>
      <h2>This is the alert</h2>
    </Wrapper>
  )
}

export default AlertBox
