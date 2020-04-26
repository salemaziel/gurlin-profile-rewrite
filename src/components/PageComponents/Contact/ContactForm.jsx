import React from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import Button from "react-bootstrap/Button"
import { navigate } from "gatsby"

import contactformStyles from "./contactform.module.css"
import Container from "react-bootstrap/Container"

/*
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
*/
/*export default function EstimateForm() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return ( */
const ContactForm = (props) => (
  <>
  <div className={contactformStyles.formBox}>
    <Container>
      <div className={contactformStyles.formContainer}>
        <h3 className={contactformStyles.title}>Say Hello</h3>
      </div>
      <Form>
        <form
          name="EstimateForm2"
          method="post"
          action="/success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <Row>
            <Col>
              <Form.Group>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className={contactformStyles.inputs} required />
              </Form.Group>
  
              <Form.Group>
               
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className={contactformStyles.inputs} required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
            
              <Form.Group>
              <label htmlFor="tel">Phone</label>
                  <input type="message" name="phone" id="phone" className={contactformStyles.inputs} required />
              </Form.Group>
            </Col>
          </Row>


          <Button
            className={contactformStyles.contactSubmit}
          >
             Submit
           {/* <input type="submit" value="" />*/}
           
          </Button>
        </form>
      </Form>
    </Container>
  </div>
  </>
)

export default ContactForm
