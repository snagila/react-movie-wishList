import { Button, Card, Row } from "react-bootstrap";

const WishList = ({
  title,
  WishListArg,
  genre,
  handleOnDelete,
  searchedMovies,
}) => {
  const filteredWishList = genre
    ? WishListArg.filter((item) => item.genre === genre)
    : WishListArg;

  return (
    <>
      <div className="">
        <Row className="ms-5 ">
          <h4 style={{ marginTop: "-4px", alignItems: "center" }}>{title}</h4>
        </Row>
        <Row style={{ height: "40vh", gap: "0.5em" }} className="mainCardRow">
          {filteredWishList.map((item, i) => (
            <Card style={{ width: "18rem" }} className="mainCard" key={i}>
              <Card.Img variant="top" src={item.Poster} height={200} />
              <Card.Body>
                <Card.Title style={{ color: "white" }}>{item.Title}</Card.Title>
                <Card.Text className="cardDescription">{item.Plot}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(searchedMovies)}
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
    </>
  );
};

export default WishList;
