import React from "react";
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetails";
import WishList from "./WishList";

const MovieWishListContainer = () => {
  return (
    <>
      <SearchBar />
      <MovieDetails />
      <WishList />
    </>
  );
};

export default MovieWishListContainer;
