import React from "react"
import styled from "styled-components"
import { Col, Row } from "react-bootstrap"

const FooterStyles = styled.footer`
  text-align: center;
  padding: 1rem;
`
const hrSize = {
  height: "2px",
  color: "rgb(0, 146, 146)",
}

export default function Footer() {
  return (
    <>
      <FooterStyles>
        <hr style={hrSize} />
        <Row>
          <Col md={4}></Col>
          <Col md={4}>© Freedom Cleaning {new Date().getFullYear()}</Col>
          <Col md={4}></Col>
        </Row>
      </FooterStyles>
    </>
  )
}
