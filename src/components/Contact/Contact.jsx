import './contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Instagram, TelephoneFill, Envelope } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  return (
    <div className="contactContainer">
     <h1 style={{fontSize:"24px"}}>Contact Us</h1>
     <h3 style={{fontSize:"18px"}}>Have questions? Suggestions? Fill out the form below to contact us.</h3>

     <Form className="formContainer">

     <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Your name</Form.Label>
    <Form.Control size="sm" type="text"/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control size="sm" type="email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label >Explain your inquiry below</Form.Label>
    <Form.Control size="sm" as="textarea" rows={3} />
  </Form.Group>

  <Form.Group controlId="formFileMultiple" className="mb-3">
    <Form.Label>Attachments (Optional)</Form.Label>
    <Form.Control size="sm" type="file" multiple />
  </Form.Group>


  <Button variant="primary" type="submit" className="submitButton">
    Submit
  </Button>
</Form>
    </div>
  )
}
