import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    freightType: '',
    weight: '',
    departureCity: '',
    deliveryCity: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} className="px-lg-4 px-md-0 bg-transparent form-container">
      <div className="form-columns">
        <InputGroup className="input-height mb-3">
          <InputGroup.Text className="border-0 radius-none bg-white">
            <i className="bi bi-box-seam red-color"></i>
          </InputGroup.Text>
          <Form.Select
            name="freightType"
            value={formData.freightType}
            onChange={handleChange}
            required
            className="border-0 radius-none text-end"
          >
            <option value="">Select...</option>
            <option value="Air">Air</option>
            <option value="Sea">Sea</option>
            <option value="Land">Land</option>
          </Form.Select>
        </InputGroup>

        <InputGroup className="input-height mb-3">
          <InputGroup.Text className="border-0 radius-none bg-white">
            <i className="bi bi-speedometer2 red-color"></i>
          </InputGroup.Text>
          <Form.Control
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter weight"
            required
            className="border-0 radius-none"
          />
        </InputGroup>

        <InputGroup className="input-height mb-3">
          <InputGroup.Text className="border-0 radius-none bg-white">
            <i className="bi bi-geo-alt red-color"></i>
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            placeholder="Enter city"
            required
            className="border-0 radius-none"
          />
        </InputGroup>

        <InputGroup className="input-height mb-3">
          <InputGroup.Text className="border-0 radius-none bg-white">
            <i className="bi bi-envelope red-color"></i>
          </InputGroup.Text>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
            className="border-0 radius-none"
          />
        </InputGroup>

        <InputGroup className="input-height mb-3">
          <InputGroup.Text className="border-0 radius-none bg-white">
            <i className="bi bi-truck red-color"></i>
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="deliveryCity"
            value={formData.deliveryCity}
            onChange={handleChange}
            placeholder="Enter delivery city"
            required
            className="border-0 radius-none"
          />
        </InputGroup>

        <Button variant="danger" type="submit" className="half-width-btn radius-none input-height mt-2">
          Get a Quote <i className="bi bi-arrow-left"></i>
        </Button>
      </div>
    </Form>
  );
};

export default QuoteForm;