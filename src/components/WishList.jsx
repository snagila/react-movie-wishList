import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MovieCard } from "./MovieCard.jsx";

const WishList = ({ title, searchedMoviesResponse }) => {
  return (
    <>
      <div className="">
        <Row className="ms-5 ">
          <h4 style={{ marginTop: "-4px", alignItems: "center" }}>{title}</h4>
        </Row>
        <Row style={{ height: "40vh", position: "relative" }}>
          <Col>
            <MovieCard searchedMoviesResponse={searchedMoviesResponse} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WishList;
