import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import pic from "../assets/a.jpg";

const DisplayWishList = () => {
  return (
    <>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button className="btn btn-danger">Delete</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default DisplayWishList;
