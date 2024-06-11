import React from "react";
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetails";
import WishList from "./WishList";

const MovieWishListContainer = () => {
  return (
    <>
      <SearchBar />
      <MovieDetails />
      <WishList title="Your Movie WishList" />
      <WishList title="Action Movies" />
      <WishList title="Comedy Movies" />
    </>
  );
};

export default MovieWishListContainer;
