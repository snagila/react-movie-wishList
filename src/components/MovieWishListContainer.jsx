import React from "react";
import SearchBar from "./SearchBar";
import { MovieCard } from "./MovieCard";
import AddToWishList from "./AddToWishList";
import { Stack, Tab, Tabs } from "react-bootstrap";
import DisplayWishList from "./DisplayWishList";

const MovieWishListContainer = () => {
  return (
    <>
      <SearchBar />

      <Stack className="my-4 wishList" direction="horizontal" gap={4}>
        <MovieCard />
        <AddToWishList />
      </Stack>

      <hr />

      <Tabs className="mb-3">
        <Tab eventKey="All" title="All">
          All Movies
          <DisplayWishList />
        </Tab>
        <Tab eventKey="Action" title="Action">
          Action Movies
          <DisplayWishList />
        </Tab>
        <Tab eventKey="Comedy" title="Comedy">
          Comedy Movies
          <DisplayWishList />
        </Tab>
      </Tabs>
    </>
  );
};

export default MovieWishListContainer;
