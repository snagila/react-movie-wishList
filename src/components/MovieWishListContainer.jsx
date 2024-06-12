import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetails";
import WishList from "./WishList";
import { Api_Url } from "../Api";
import axios from "axios";

const MovieWishListContainer = () => {
  const [background, setBackGround] = useState(
    "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  );
  const [searchedMovies, setSearchedMovies] = useState({});
  console.log(searchedMovies);
  const [WishListArg, setWishListArg] = useState([]);
  const handleOnClick = () => {
    setWishListArg([...WishListArg, searchedMovies]);
  };
  console.log(WishListArg);
  const searchedMoviesLength = Object.keys(searchedMovies).length;

  const searchMovies = async (formValue) => {
    try {
      const response = await axios.get(Api_Url + formValue);
      setSearchedMovies(response.data);
      setBackGround(response.data.Poster);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <SearchBar
        searchMovies={searchMovies}
        searchedMovies={searchedMovies}
        background={background}
      />
      {/* {searchedMoviesLength > 1 && (
        <MovieDetails searchedMovies={searchedMovies} />
      )} */}
      <MovieDetails
        searchedMovies={searchedMovies}
        handleOnClick={handleOnClick}
      />
      <hr />
      <WishList title="Your Movie WishList" WishListArg={WishListArg} />
      <hr />
      <WishList
        title="Action Movies"
        Genre="Action"
        WishListArg={WishListArg}
      />
      <hr />
      <WishList
        title="Comedy Movies"
        Genre="Comedy"
        WishListArg={WishListArg}
      />
    </>
  );
};

export default MovieWishListContainer;
