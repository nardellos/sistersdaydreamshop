import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import FormContainer from '../components/FormContainer'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap'
import { Nav } from 'react-bootstrap'

class AboutUsScreen extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      name: name,
      from_name: email,
      to_name: 'Sisters Daydream Farm and Rescue',
      subject: subject,
      message_html: message,
    }
    emailjs.send(
      'gmail',
      process.env.EmailJS_Service,
      process.env.EmailJS_Template,
      templateParams,
      process.env.EmailJS_UserID
    )
    this.resetForm()
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <div class='jumbotron jumbotron-fluid'>
        <div class='container'>
          <h2 class='display-4'>About Us</h2>
        </div>
        <FormContainer>
          <Row>
            <Col md={6}>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId='formBasicEmail'>
                  <Label className='text-muted'>Email address</Label>
                  <Input
                    type='email'
                    name='email'
                    value={this.state.email}
                    className='text-primary'
                    onChange={this.handleChange.bind(this, 'email')}
                    placeholder=''
                  />
                </FormGroup>
                <FormGroup controlId='formBasicName'>
                  <Label className='text-muted'>Name</Label>
                  <Input
                    type='text'
                    name='name'
                    value={this.state.name}
                    className='text-primary'
                    onChange={this.handleChange.bind(this, 'name')}
                    placeholder=''
                  />
                </FormGroup>
                <FormGroup controlId='formBasicSubject'>
                  <Label className='text-muted'>Subject</Label>
                  <Input
                    type='text'
                    name='subject'
                    className='text-primary'
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, 'subject')}
                    placeholder=''
                  />
                </FormGroup>
                <FormGroup controlId='formBasicMessage'>
                  <Label className='text-muted'>Message</Label>
                  <Input
                    type='textarea'
                    name='message'
                    className='text-primary'
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, 'message')}
                  />
                </FormGroup>
                <Button variant='primary' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Nav.Link>
                <i className='fab fa-facebook-square fa-2x'></i>
                <i class='fab fa-instagram-square fa-2x'></i>
              </Nav.Link>
            </Col>
          </Row>
        </FormContainer>
      </div>
    )
  }
}
export default AboutUsScreen
