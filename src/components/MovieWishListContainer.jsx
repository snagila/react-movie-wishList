import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetails";
import WishList from "./WishList";
import { Api_Url } from "../Api";
import axios from "axios";

const MovieWishListContainer = () => {
  const [searchedMovies, setSearchedMovies] = useState({});
  console.log(searchedMovies);

  const [background, setBackGround] = useState(
    "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
  );

  const searchMovies = async (formValue) => {
    try {
      const response = await axios.get(Api_Url + formValue);
      setSearchedMovies(response.data);
      setBackGround(response.data.Poster);
      searchedMoviesResponse(response.data);
    } catch (error) {
      alert(error.message);
    }
  };
  const searchedMoviesResponse = (movieObj) => {
    console.log(movieObj);
    return movieObj;
  };

  return (
    <>
      <SearchBar
        searchMovies={searchMovies}
        searchedMovies={searchedMovies}
        background={background}
      />
      <MovieDetails searchedMovies={searchedMovies} />
      <hr />
      <WishList
        title="Your Movie WishList"
        searchedMoviesResponse={searchedMoviesResponse}
      />
      <hr />
      <WishList title="Action Movies" />
      <hr />
      <WishList title="Comedy Movies" />
    </>
  );
};

export default MovieWishListContainer;
