import React from "react";
import { Alert, Button, Stack } from "react-bootstrap";

const AddToWishList = () => {
  return (
    <>
      <Stack className="d-flex justify-content-center" gap={2}>
        <Button variant="outline-primary">+ Add To WishList</Button>
        <Stack direction="horizontal" gap={2} className="d-flex">
          <Button variant="outline-primary" className="flex-grow-1">
            + Action
          </Button>
          <Button variant="outline-primary" className="flex-grow-1">
            + Comedy
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default AddToWishList;
