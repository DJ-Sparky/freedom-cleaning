import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Contact from "../../components/contact/contact"

const vrSize = {
  height: "100%",
}
const AboutPage = () => (
  <Layout>
    <Container>
      <Seo title="About us" />
      <Row className="mt-3 mb-3 center-block text-center">
        <Col>
          <h2>Freedom Cleaning About Us</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
            Jamie first appeared on our TV screens back in 2020 on Channel 5's
            "Rich House, Poor House." Since then she has gone on to start her
            own successful cleaning company.
          </p>
          <p>
            Established in 2021 and now offering cleaning services for homes in
            Bradford, Leeds, Ilkley, Shipley, Keighley, Saltaire, Bingley,
            Yeadon, Otley and Guiseley.
          </p>
          <p>Rates are competitive with all cleaning materials included.</p>
          <p>
            Weekly or fortnightly cleans as well as One Off cleans, Spring
            Cleans and the very popular Oven Cleaning service.
          </p>
          <p>
            The service you receive is tailored to fit around your individual
            needs.
          </p>
          <p>
            She now has many satisfied clients throughout Bradford who have
            their homes and businesses cleaned on a regular basis.
          </p>
          <p>
            Clients include busy working families, senior citizens, business
            professionals, and landlords.
          </p>
          <p>
            Jamie is happy to provide references from existing clients for peace
            of mind. Many online reviews are also available.
          </p>
          <p>
            You are under no obligation to commit to any set number of cleans or
            timescale as we are confident that you will be happy with the
            service you receive.
          </p>

          <p>
            <b>Fully Insured for Personal, Public and Product Liability.</b>
          </p>
          <p>
            All enquiries are welcome so contact us today to discuss your
            cleaning needs
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

export default AboutPage
