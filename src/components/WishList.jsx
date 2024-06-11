import React from "react";
import { Col, Row } from "react-bootstrap";
import { MovieCard } from "./MovieCard.jsx";

const WishList = ({ title, searchedMovies }) => {
  return (
    <>
      <div>
        <Row className="ms-5 ">
          {" "}
          <h6 className="mt-2">{title}</h6>
        </Row>
        <Row
          style={{ height: "40vh", background: "blue", position: "relative" }}
        >
          <Col>
            <MovieCard searchedMovies={searchedMovies} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WishList;
