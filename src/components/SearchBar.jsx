import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchBar = ({ searchMovies, background }) => {
  const initialState = "";
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    searchMovies(form);
    setForm(initialState);
  };

  const rowStyle = {
    height: "60vh",
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
  };
  return (
    <>
      <Row style={rowStyle}>
        <Col className="d-flex align-items-end justify-content-center p-4 ">
          <Form className="d-flex gap-4" onSubmit={handleOnSubmit}>
            <Row className="col-md-9">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder="Enter Movie Title"
                  className="px-5"
                  name="inputfield"
                  onChange={handleOnChange}
                  value={form}
                />
              </Form.Group>
            </Row>
            <Row className="col-md-3">
              <Button className="px-4" type="submit">
                Search
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
