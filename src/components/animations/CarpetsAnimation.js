import React from "react"
import styled, { keyframes } from "styled-components"

export default function CarpetsAnimation() {
  return <Wrapper>Carpets cleaned from just £35</Wrapper>
}

const animation = keyframes`
  0% { opacity: 0; }
  15% { opacity: 1; }
  75% { opacity: 1; }
  100% { opacity: 0 }
  `

export const Wrapper = styled.span`
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`
