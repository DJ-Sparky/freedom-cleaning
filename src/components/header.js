import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Navbar, Nav } from "react-bootstrap"
import "./css/custom.css"
import "./css/navbar-hamburger.css"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt"

const Header = ({ siteTitle }) => (
  <Container fluid className="bg-primary">
    <Container>
      <Navbar className="fluid " expand="lg" collapseOnSelect={true}>
        <Link to="/">
          <StaticImage
            src="../images/gatsby-icon.png"
            width={50}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Freedom Cleaning Services"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="fluid navbar-nav ms-auto text-center">
            <ul className="navbar-nav">
              <li className="nav-link">
                <a href="tel:07503-885730">
                  07503 885730 <FaMobileAlt />
                </a>
              </li>

              <li>
                <Link to="/" className="nav-link" activeClassName="active">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/house-cleans/"
                  className="nav-link"
                  activeClassName="active"
                >
                  House Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/carpet-cleaning/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Carpet Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/oven-cleaning/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Oven Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/about/"
                  className="nav-link"
                  activeClassName="active"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="https://www.facebook.com/freedomcarpetsandcleaningservices/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="facebook-icon" />
                </a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
