import React from "react";
import { Button, FormControl, Stack } from "react-bootstrap";

const SearchBar = () => {
  return (
    <>
      <Stack direction="horizontal" gap={4}>
        <FormControl size="lg" type="text" placeholder="Enter Movie Title" />
        <Button>Search</Button>
      </Stack>
    </>
  );
};

export default SearchBar;
