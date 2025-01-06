import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

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
    // Handle form submission
  };

  return (
    <Form onSubmit={handleSubmit} className="px-lg-4 px-md-0 bg-transparent form-container">
      <div className="form-columns">
        <InputGroup className="input-height mb-3 position-relative">
          <InputGroup.Text className="border-0 radius-none bg-white">
            <i className="bi bi-box-seam red-color"></i>
          </InputGroup.Text>
          <Form.Select
            name="freightType"
            value={formData.freightType}
            onChange={handleChange}
            required
            className="border-0 radius-none text-end custom-select no-focus"
          >
            <option value="">انتخاب کنید</option>
            <option value="Air">Air</option>
            <option value="Sea">Sea</option>
            <option value="Land">Land</option>
          </Form.Select>
          {/* Show the icon only if no option is selected */}
          {formData.freightType === '' && (
            <i className="bi bi-caret-down-fill position-absolute select-icon"></i>
          )}
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
            className="border-0 radius-none no-focus"
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
            className="border-0 radius-none no-focus"
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
            className="border-0 radius-none no-focus"
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
            className="border-0 radius-none no-focus"
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
