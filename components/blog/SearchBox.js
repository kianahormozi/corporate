import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const BlogSearchBox = () => {
  return (
    <InputGroup className="search-box position-relative">
    <FormControl
      placeholder="جستجو..."
      aria-label="Search"
    />
    <Button variant="danger">
      <i className="bi bi-search"></i> 
    </Button>
  </InputGroup>
);
};


export default BlogSearchBox
