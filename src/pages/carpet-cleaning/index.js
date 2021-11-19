import * as React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt"
import CarpetsAnimation from "../../components/animations/CarpetsAnimation"
import Zoom from "react-reveal/Zoom"
import Contact from "../../components/contact/contact"

const vrSize = {
  height: "100%",
}

const CarpetPage = () => (
  <Layout>
    <Container>
      <Seo title="Carpet Cleaning for Bradford and Leeds" />
      <Row className=" mt-3 mb-3 center-block text-center">
        <Col>
          <h2>Carpet Cleaning</h2>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p>
            Carpet’s gather dust, bacteria, dust mites and other pollutants in
            its undergrowth.
          </p>
          <p>This type of dirt cannot be removed with ordinary vacuuming.</p>
          <p>And that’s where we can help.</p>
          <Zoom fraction={0.1}>
            <Card className="border-2 border-primary center-block text-center mt-3 mb-3">
              <p className="mt-3">
                <CarpetsAnimation />
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
            Using professional equipment and cleaning agents, we will wash, and
            refresh your carpet.
          </p>
          <p>
            We will restore the natural beauty of your carpets, and leave them
            hygienically clean and fresh.
          </p>
          <StaticImage
            src="../../images/carpet-cleaning.jpg"
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

export default CarpetPage
