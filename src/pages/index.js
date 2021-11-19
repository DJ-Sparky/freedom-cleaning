import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { StaticImage } from "gatsby-plugin-image"
import { Link as GatsbyLink } from "gatsby"
import { Container, Card, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt"
import ContactAnimation from "../components/animations/CarpetsAnimation"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import LightSpeed from "react-reveal/LightSpeed"

const StyledCardLink = styled(GatsbyLink)`
  color: black;
  text-decoration: none;
  &:hover {
    color: black;
  }
`

const IndexPage = ({ siteTitle }) => {
  const { bubblesImage, backgroundImageCard } = useStaticQuery(
    graphql`
      query {
        bubblesImage: file(relativePath: { eq: "bubbles.png" }) {
          childImageSharp {
            gatsbyImageData(width: 2000, pngOptions: { quality: 20 })
          }
        }
        backgroundImageCard: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 2000, jpgOptions: { quality: 20 })
          }
        }
      }
    `
  )
  const bubblesBackground = getImage(bubblesImage)
  const cardImage = getImage(backgroundImageCard)
  return (
    <>
      <Layout>
        <Seo title="Cleaning Services for Bradford and Leeds" />
        <BgImage image={bubblesBackground}>
          <Container
            fluid
            itemscope
            itemtype="https://schema.org/LocalBusiness"
          >
            <Row className="mb-3 center-block text-center">
              <h1 className="mt-3" itemprop="name">
                Freedom Cleaning Services.
              </h1>
            </Row>
            <Container row-bgimage>
              <Row className="row-center">
                <Col md={6}>
                  {" "}
                  <Row>
                    <p className="bubbles-content">
                      <span itemprop="description">
                        Domestic, Commercial and Landlord cleaning services
                      </span>{" "}
                      for <span itemprop="addressLocality">Bradford</span>,{" "}
                      <span itemprop="addressLocality">Leeds</span>,{" "}
                      <span itemprop="addressLocality">Ilkley</span>,{" "}
                      <span itemprop="addressLocality">Shipley</span>,{" "}
                      <span itemprop="addressLocality">Keighley</span>,{" "}
                      <span itemprop="addressLocality">Saltaire</span>,{" "}
                      <span itemprop="addressLocality">Bingley</span>,{" "}
                      <span itemprop="addressLocality">Yeadon</span>,{" "}
                      <span itemprop="addressLocality">Otley</span> and
                      <span itemprop="addressLocality">Guiseley</span>..
                    </p>
                    <p className="bubbles-content">
                      Freedom Cleaning Services provide professional, reliable
                      and trustworthy cleaning services for your home.
                    </p>
                  </Row>
                </Col>

                <Col md={6}>
                  <Row className="card-padding center-block text-center mb-3">
                    <Zoom fraction={0.1}>
                      <Card className="border-2 border-primary">
                        <p className="mt-3 bubbles-content">
                          <ContactAnimation />
                        </p>
                        <p className="bubbles-content">
                          <h5>
                            <a href="tel:07503-885730">
                              <span itemprop="telephone">07503 885730</span>{" "}
                              <FaMobileAlt />
                            </a>
                          </h5>
                        </p>
                        <p>
                          <Link to="/contact/">Use our Contact Form</Link>
                        </p>
                        <p>
                          <a
                            href="https://www.facebook.com/freedomcarpetsandcleaningservices/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Find us on Facebook -{" "}
                            <FaFacebook className="facebook-icon" />
                          </a>
                        </p>
                      </Card>{" "}
                    </Zoom>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Container>
        </BgImage>
        <Fade bottom fraction={0.1}>
          <BgImage image={cardImage}>
            <Container fluid>
              <Container>
                <Row>
                  <Col md={4}>
                    <Fade bottom fraction={0.1}>
                      <Card className="mt-3 mb-3 border-0">
                        <StyledCardLink to="/house-cleans/">
                          <StaticImage
                            src="../images/cards/residential.jpg"
                            layout="fullWidth"
                            quality={70}
                            formats={["auto", "webp", "avif"]}
                            alt="House Cleaning Services"
                            style={{ marginBottom: `1.45rem` }}
                          />
                          <Card.Body>
                            <Card.Title>House Cleans</Card.Title>
                            <Card.Text>
                              A complete package or just a few rooms. Weekly,
                              fortnightly or a one off clean. Make your home
                              shine.
                            </Card.Text>
                          </Card.Body>
                        </StyledCardLink>
                      </Card>
                    </Fade>
                  </Col>
                  <Col md={4}>
                    <Fade bottom fraction={0.1}>
                      <Card className="mt-3 mb-3 border-0">
                        <StyledCardLink to="/carpet-cleaning/">
                          <StaticImage
                            src="../images/cards/carpet-cleaning.jpg"
                            layout="fullWidth"
                            quality={70}
                            formats={["auto", "webp", "avif"]}
                            alt="Commercial Cleaning Services"
                            style={{ marginBottom: `1.45rem` }}
                          />
                          <Card.Body>
                            <Card.Title>Carpet Cleaning</Card.Title>
                            <Card.Text>
                              Bring your carpets, rugs and staircase back to
                              life with our professional, deep clean, carpet
                              cleaning machines.
                            </Card.Text>
                          </Card.Body>
                        </StyledCardLink>
                      </Card>
                    </Fade>
                  </Col>
                  <Col md={4}>
                    <Fade bottom fraction={0.1}>
                      <Card className="mt-3 mb-3 border-0">
                        <StyledCardLink to="/oven-cleaning/">
                          <StaticImage
                            src="../images/cards/oven-cleaning.jpg"
                            layout="fullWidth"
                            quality={70}
                            formats={["auto", "webp", "avif"]}
                            alt="Commercial Cleaning Services"
                            style={{ marginBottom: `1.45rem` }}
                          />
                          <Card.Body>
                            <Card.Title>Oven Cleaning</Card.Title>
                            <Card.Text>
                              Be ready for Christmas with our popular oven
                              cleaning service. Watch the Yorkshire puddings
                              rise to perfection!
                            </Card.Text>
                          </Card.Body>
                        </StyledCardLink>
                      </Card>
                    </Fade>
                  </Col>
                </Row>
              </Container>
            </Container>
          </BgImage>
        </Fade>

        <Container>
          <Row className="row-center">
            <Col md={4}>
              <LightSpeed left>
                <Card className="mt-4 border-0">
                  <StaticImage
                    src="../images/cards/step-1.jpg"
                    layout="fullWidth"
                    quality={70}
                    formats={["auto", "webp", "avif"]}
                    alt="Residential Cleaning Services"
                  />
                </Card>
              </LightSpeed>
            </Col>
            <Col md={8}>
              <Card className="mt-4 center-text border-primary">
                <p>
                  "Wow !!! Booked Freedom Cleaning on Sunday, they arrived on
                  the Tuesday as scheduled and 90 minutes later my range cooker
                  is gleaming !!
                </p>
                <p>I mean … GLEAMING!</p>
                <p>Cannot recommend highly enough."</p>
                <p>Deana & Graham</p>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="row-center">
            <Col md={4}>
              <LightSpeed left>
                <Card className="mt-4 border-0">
                  <StaticImage
                    src="../images/cards/step-2.jpg"
                    layout="fullWidth"
                    quality={70}
                    formats={["auto", "webp", "avif"]}
                    alt="Commercial Cleaning Services"
                  />
                </Card>
              </LightSpeed>
            </Col>
            <Col md={8}>
              <Card className="mt-4 center-text border-primary">
                <p>"Jamie is the cleaning Queen</p>
                <p>
                  Whether it's full house , end of tenancy or just a good oven
                  clean shes your woman!
                </p>
                <p>10/10 for me"</p>
                <p>Caroline Holmes-Pearson</p>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="row-center">
            <Col md={4}>
              <LightSpeed left>
                <Card className="mt-4 border-0">
                  <StaticImage
                    src="../images/cards/step-3.jpg"
                    layout="fullWidth"
                    quality={70}
                    formats={["auto", "webp", "avif"]}
                    alt="Commercial Cleaning Services"
                  />
                </Card>
              </LightSpeed>
            </Col>
            <Col md={8}>
              <Card className="mt-4 center-text border-primary">
                <p>"Amazing job from Jamie today can’t recommend her enough.</p>
                <p>Very friendly thank you so much xx</p>
                <p>Zoe Chris Clough"</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
export default IndexPage
