import * as React from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"

const ContactPage = () => (
  <Container>
    <Form
      name="contact v1"
      method="post"
      data-netlify="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact v1" />
      <p hidden>
        <label>
          dont fill this out: <input name="bot-field" />
        </label>
      </p>
      <Row mt-3>
        <Col md={6}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              size="lg"
              type="text"
              placeholder="First Name"
              name="first-name"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              size="lg"
              type="text"
              placeholder="Last Name"
              name="last-name"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Form.Group>
          <Form.Label>Company Name</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Optional" />
        </Form.Group>
      </Row>
      <Row>
        <Col className="mt-3">
          <Form.Label>Please tell us which service you require.</Form.Label>
          <Form.Select aria-label="required service">
            <option value="1">House Cleaning</option>
            <option value="2">Oven Clean</option>
            <option value="3">Carpet Clean</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3">
          <Form.Group>
            <Form.Label>Additional information</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="What do you need?"
              name="info"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="mt-3">
          <Form.Group>
            <Form.Label>
              Please provide your e-mail or contact telephone number for a
              reply.
            </Form.Label>
            <Form.Control
              required
              size="lg"
              type="text"
              placeholder="Mobile, Landline or e-mail accepted"
              name="info"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}></Col>
        <Col md={4}>
          <Button type="submit">Submit your enquiry.</Button>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Form>
  </Container>
)

export default ContactPage
