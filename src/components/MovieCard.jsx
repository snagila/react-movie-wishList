import { Button, Card } from "react-bootstrap";
import pic from "../assets/a.jpg";

export const MovieCard = ({ searchedMoviesResponse }) => {
  return (
    <>
      <Card className="cardStyle">
        <Card.Img variant="top" src={pic} />
        <Card.Body className="cardBody">
          <Card.Title>Card Title</Card.Title>
          <Card.Text className="cardDescription">
            Some quick example text to build on the card title and make up the
            bulk of the
            card'ssdfasdfgsdfgdsfgdfsgdtsdfghgfdfghgtfdfgfrdfghgfrdfgtrerftg
          </Card.Text>
          <Button variant="danger">Remove</Button>
        </Card.Body>
      </Card>
      {/* // searchedMovies={searchedMovies}
      // title={searchedMovies.Title}
      // description={searchedMovies.Plot} */}
    </>
  );
};
