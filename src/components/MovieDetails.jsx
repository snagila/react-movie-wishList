import React from "react";
import { Col, Row } from "react-bootstrap";

const MovieDetails = ({ searchedMovies }) => {
  return (
    <>
      <Col style={{ height: "40vh" }} className="movieDetails">
        <div className="ms-5">
          <Row>
            <h3 className="mt-3 ">{searchedMovies.Plot}</h3>
          </Row>
          <Row>Actors: {searchedMovies.Actors}</Row>
        </div>
      </Col>
    </>
  );
};

export default MovieDetails;
