import { useState } from 'react';
import { Form, Button, Container, Alert, Row, Col } from 'react-bootstrap';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter a name.';
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Please enter a valid email.';
    if (!form.message.trim()) newErrors.message = 'Please enter your message.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      // Gửi POST đến server
      fetch('http://localhost:5000/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
        .then((res) => {
          if (!res.ok) throw new Error('Failed to submit');
          return res.json();
        })
        .then(() => {
          setSubmitted(true);
          setErrors({});
        })
        .catch(() => alert('Failed to submit. Try again later.'));
    }
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <Container className="my-5">
      <h2>Contact Us</h2>
      {submitted && <Alert variant="success">Message sent successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>

        <Row>
          <Col>
            <Button type="submit" variant="primary">Send</Button>{' '}
            <Button type="button" variant="secondary" onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Contact;
