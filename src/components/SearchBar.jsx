import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const SearchBar = ({ searchMovies, searchedMovies }) => {
  const [form, setForm] = useState("");
  const [background, setBackGround] = useState(
    "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  );

  const handleOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    searchMovies(form);
  };
  const bgChanger = () => {
    const image = searchedMovies.Poster;

    setBackGround(image);
  };

  const rowStyle = {
    height: "60vh",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
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
                />
              </Form.Group>
            </Row>
            <Row className="col-md-3">
              <Button className="px-4" type="submit" onClick={bgChanger}>
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
