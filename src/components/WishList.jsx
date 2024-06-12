import { Button, Card, Row } from "react-bootstrap";

const WishList = ({ title, WishListArg, Genre }) => {
  const filteredWishList = Genre
    ? WishListArg.filter((movie) => movie.Genre === Genre)
    : WishListArg;
  return (
    <>
      <div className="">
        <Row className="ms-5 ">
          <h4 style={{ marginTop: "-4px", alignItems: "center" }}>{title}</h4>
        </Row>
        <Row style={{ height: "40vh", gap: "1em" }} className="mainCardRow">
          {filteredWishList.map((item, i) => (
            <Card style={{ width: "18rem" }} className="mainCard" key={i}>
              <Card.Img variant="top" src={item.Poster} height={200} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>{item.Title}</Card.Title>
                <Card.Text className="cardDescription">{item.Plot}</Card.Text>
                <Button variant="danger">Remove</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
    </>
  );
};

export default WishList;
