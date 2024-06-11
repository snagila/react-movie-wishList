import React from "react";
import { Col, Row } from "react-bootstrap";
import { MovieCard } from "./MovieCard.jsx";

const WishList = () => {
  return (
    <>
      <Row style={{ height: "40vh", background: "blue" }}>
        <Col>
          <MovieCard />
        </Col>
      </Row>
    </>
  );
};

export default WishList;
