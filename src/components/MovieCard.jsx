import { Button, Card } from "react-bootstrap";
import pic from "../assets/a.jpg";

export const MovieCard = () => {
  return (
    <>
      {" "}
      <Card style={{ width: "18rem", borderRadius: "none" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};
