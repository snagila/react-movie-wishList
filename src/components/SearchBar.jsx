import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const SearchBar = () => {
  return (
    <>
      <Row style={{ height: "60vh", background: "black" }}>
        <Col className="d-flex align-items-end justify-content-center p-4 ">
          <Form className="d-flex gap-4">
            <Row className="col-md-9">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Title"
                  className="px-5"
                />
              </Form.Group>
            </Row>
            <Row className="col-md-3">
              <Button className="px-4">Search</Button>
            </Row>
            <div></div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
