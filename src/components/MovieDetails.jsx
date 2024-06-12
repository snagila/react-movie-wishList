import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const MovieDetails = ({ searchedMovies, handleOnClick }) => {
  return (
    <>
      <Col style={{ height: "35vh" }} className="movieDetails">
        <div className="ms-5">
          <Row>
            <h2 className="mt-3 " style={{ color: "red" }}>
              {searchedMovies.Title}
            </h2>
          </Row>
          <Row>
            <h3 className="mt-3 ">{searchedMovies.Plot}</h3>
          </Row>
          <Row className="ms-1">Year: {searchedMovies.Year}</Row>
          <Row className="ms-1">Actors: {searchedMovies.Actors}</Row>
          <Row className="ms-1">Director: {searchedMovies.Director}</Row>
          <Row className="ms-1">Writer: {searchedMovies.Writer}</Row>
          <Row className="ms-1">imdbRating: {searchedMovies.imdbRating}</Row>
          <Row className="ms-1">Awards: {searchedMovies.Awards}</Row>
        </div>
        <div className=" ms-5 mt-2">
          <button
            className="btn btn-warning "
            onClick={() => handleOnClick("Action")}
          >
            + Action
          </button>

          <button
            className="btn btn-danger ms-3"
            onClick={() => handleOnClick("Comedy")}
          >
            + Comedy
          </button>
        </div>
      </Col>
    </>
  );
};

export default MovieDetails;
