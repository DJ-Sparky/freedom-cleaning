import * as React from "react"
import { Link } from "gatsby"
// import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { Container, Row, Col, Card } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt"
import HouseAnimation from "../../components/animations/HouseAnimation"
import Zoom from "react-reveal/Zoom"
import Contact from "../../components/contact/contact"

const vrSize = {
  height: "100%",
}

const ResidentialPage = () => (
  <Layout>
    <Container>
      <Seo title="House cleaning for Bradford and Leeds" />
      <Row className="mt-3 mb-3 center-block text-center">
        <Col>
          <h2>House Cleans</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
            We help you get your home organised and clutter free. We can provide
            a one off deep clean, or weekly and fortnightly maintenance, at a
            time suitable to you.
          </p>
          <p>
            We will ensure your cleaning is always completed to the highest
            standard!
          </p>
          <Zoom fraction={0.1}>
            <Card className="border-2 border-primary center-block text-center mt-3 mb-3">
              <p className="mt-3">
                <HouseAnimation />
              </p>
              <p>
                <a href="tel:07503-885730">
                  07503 885730 <FaMobileAlt />
                </a>
              </p>
              <p>
                <Link to="/contact/">Use our Contact Form</Link>
              </p>
            </Card>
          </Zoom>
          <p>
            We are more than happy to clean your house from top to bottom, and
            where appropriate we use our safe and powerful cleaning solutions
            and disinfectants to reduce the chance of spreading illness and
            remove the risk of allergies.
          </p>
          <StaticImage
            src="../../images/kitchen.jpg"
            layout="fullWidth"
            quality={70}
            formats={["auto", "webp", "avif"]}
            alt="Residential Cleaning Services"
            style={{ marginBottom: `1.45rem`, marginTop: `1.45rem` }}
          />
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

export default ResidentialPage
