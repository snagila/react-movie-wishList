import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pic from "../assets/a.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export const MovieCard = () => {
  return (
    <>
      <div style={{ background: "purple" }} className="main-card">
        <div>
          <Card style={{ width: "18rem" }} className="">
            <Card.Img variant="top" src={Pic} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="danger">Delete </Button>
              <Button variant="danger">Delete </Button>
              <Button variant="danger">Delete </Button>
            </Card.Body>
          </Card>
        </div>
        <div></div>
      </div>
    </>
  );
};
