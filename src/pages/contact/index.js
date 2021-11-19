import * as React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt"
import Contact from "../../components/contact/contact"

const vrSize = {
  height: "100%",
}

const ContactPage = () => (
  <Layout>
    <Container>
      <Seo title="Contact us" />
      <Row className="mt-3 mb-3 center-block text-center">
        <Col>
          <h2>Contact Us</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>Call for a free quote:</p>
          <p>Mon-Fri 9.30am- 4.30pm</p>
          <p>
            <a href="tel:07503-885730">
              07503 885730 <FaMobileAlt />
            </a>
          </p>
          <p>
            Phoning us is the fastest way to get in-touch. However if complete
            our enquiry form, Jamie will get back to you with a free, no
            obligation quote, as soon as she is able to do so.
          </p>
          <p>
            Cleaning services for homes in Bradford, Leeds, Ilkley, Shipley,
            Keighley, Saltaire, Bingley, Yeadon, Otley and Guiseley.
          </p>
          <p>
            if you're unsure whether we cover your area, contact us and we'll
            let you know.
          </p>
        </Col>
        <Col
          md={1}
          className="col-md-1 d-none d-md-flex justify-content-center"
        >
          <div className="vr" style={vrSize}></div>
        </Col>
        <Col md={5}>
          <Contact />
        </Col>
      </Row>
    </Container>
    <Container className="mt-4">
      <Row>
        <Col
          md={7}
          className="col-md-7 d-none d-md-flex justify-content-center"
        ></Col>
        <Col
          md={5}
          className="col-md-5 d-none d-md-flex justify-content-center"
        >
          <Link to="/">Go back to the homepage</Link>
        </Col>
      </Row>
    </Container>
    <Container className="mt-4 d-md-none">
      <Row>
        <Col className="d-flex justify-content-center">
          <Link to="/">Go back to the homepage</Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ContactPage
