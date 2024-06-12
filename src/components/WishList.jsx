import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MovieCard } from "./MovieCard.jsx";

const WishList = ({ title, searchedMovies }) => {
  console.log(searchedMovies);
  return (
    <>
      <div className="">
        <Row className="ms-5 ">
          <h4 style={{ marginTop: "-4px", alignItems: "center" }}>{title}</h4>
        </Row>
        <Row style={{ height: "40vh", position: "relative" }}>
          <Col>
            <MovieCard />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WishList;
