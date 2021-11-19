import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card } from "react-bootstrap"
import Layout from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt"
import OvenAnimation from "../../components/animations/OvenAnimation"
import Zoom from "react-reveal/Zoom"
import Contact from "../../components/contact/contact"

const vrSize = {
  height: "100%",
}
const OvenPage = () => (
  <Layout>
    <Container>
      <Seo title="Oven cleaning for Bradford and Leeds" />
      <Row className="mt-3 mb-3 center-block text-center">
        <Col>
          <h2>Oven Cleaning</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
            Christmas is just around the corner and once again our Oven Cleaning
            service is the most popular choice at this time of year.
          </p>
          <p>We will make your oven sparkle ‘like new’ again.</p>
          <Zoom fraction={0.1}>
            <Card className="border-2 border-primary center-block text-center mt-3 mb-3">
              <p className="mt-3">
                <OvenAnimation />
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
          <p>Professionally trained, fully insured for your peace of mind.</p>
          <p>Our service extends to all ovens, hobs, and extractors.</p>
          <p>
            Contact us today and ensure your Christmas and New Year dinners turn
            out the best they can possibly be.
          </p>
          <StaticImage
            src="../../images/oven-before-after.jpg"
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
          className="col-md-7 d-md-flex d-none justify-content-center"
        ></Col>
        <Col
          md={5}
          className="col-md-5 d-md-flex d-none justify-content-center"
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

export default OvenPage
