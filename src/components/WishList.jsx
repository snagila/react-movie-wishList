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
      <div>
        <Row className="container ">
          <h4 style={{ marginTop: "3px", color: "whitesmoke" }}>{title}</h4>
        </Row>
        <hr />
        <Row style={{ height: "40vh", gap: "0.5em" }} className="mainCardRow">
          {filteredWishList.length < 1 ? (
            <h4
              style={{ marginTop: "2em", textAlign: "center", color: "cyan" }}
            >
              Sorry ! Nothing To Show
            </h4>
          ) : (
            filteredWishList.map((movie, i) => (
              <Card style={{ width: "18rem" }} className="mainCard" key={i}>
                <Card.Img variant="top" src={movie.Poster} height={170} />
                <Card.Body>
                  <Card.Title style={{ color: "crimson" }}>
                    {movie.Title}
                  </Card.Title>
                  <Card.Text className="cardDescription">
                    {movie.Plot}
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDelete(movie)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            ))
          )}
        </Row>
      </div>
    </>
  );
};

export default WishList;
