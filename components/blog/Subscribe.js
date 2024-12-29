import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const BlogSubscribe = () => {
  return (
    <Container className="subscribe-box text-center mb-5 py-5">
      <div className="icon">
      <i class="bi bi-envelope-paper"></i>
      </div>
      <h3 className="subscribe-title mb-2"> در خبرنامه ما</h3>
      <p className="subscribe-text mb-4">عضو شوید</p>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="ایمیل وارد کنید"
            className="email-input mb-3"
            required
          />
        </Form.Group>
        <Button type="submit"  className="subscribe-button ">
          عضو شوید
        </Button>
      </Form>
    </Container>
  );
};

export default BlogSubscribe;
