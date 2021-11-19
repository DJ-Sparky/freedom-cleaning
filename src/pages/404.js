import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Container>
      <Row>
        <Col md={4}></Col>
        <Col md={4} className="d-md-flex justify-content-center">
          <Link to="/">Go to the homepage</Link>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
