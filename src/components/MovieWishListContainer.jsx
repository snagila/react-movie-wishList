import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetails";
import WishList from "./WishList";
import { Api_Url } from "../Api";
import axios from "axios";

const MovieWishListContainer = () => {
  const [searchedMovies, setSearchedMovies] = useState({});

  const searchMovies = async (formValue) => {
    try {
      const response = await axios.get(Api_Url + formValue);
      console.log(searchedMovies.Poster);
      setSearchedMovies(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <SearchBar searchMovies={searchMovies} searchedMovies={searchedMovies} />
      <MovieDetails />
      <WishList title="Your Movie WishList" searchedMovies={searchedMovies} />
      <WishList title="Action Movies" />
      <WishList title="Comedy Movies" />
    </>
  );
};

export default MovieWishListContainer;
