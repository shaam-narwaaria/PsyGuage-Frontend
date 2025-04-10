import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000); // hide message after 5s
  };

  return (
    <Container className="py-5 d-flex justify-content-center align-items-center">
      <div className="p-5 shadow-lg rounded-4 bg-light w-100" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4 text-center text-primary fw-bold">
        We Value Your Feedback </h2>

        {submitted && (
          <Alert variant="success" className="d-flex align-items-center gap-2 fade show">
            <CheckCircleFill className="text-success" size={20} />
            <span>Thank you for your feedback!</span>
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label className="fw-semibold">Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="rounded-3"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label className="fw-semibold">Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="rounded-3"
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-4">
            <Form.Label className="fw-semibold">Your Feedback</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Write your feedback here..."
              className="rounded-3"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 rounded-3 fw-semibold">
            🚀 Submit Feedback
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Feedback;
