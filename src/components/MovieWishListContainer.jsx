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

  const searchMovies = async (formValue) => {
    try {
      const response = await axios.get(Api_Url + formValue);
      setSearchedMovies(response.data);
      setBackGround(response.data.Poster);
    } catch (error) {
      alert(error.message);
    }
  };

  const [WishListArg, setWishListArg] = useState([]);

  const handleOnClick = (genre) => {
    const movieWithGenre = { ...searchedMovies, genre: genre };
    setWishListArg([...WishListArg, movieWithGenre]);
  };

  const handleOnDelete = (movie) => {
    const updateAfterDelete = WishListArg.filter(
      (item) => item.imdbID !== movie.imdbID
    );
    setWishListArg(updateAfterDelete);
  };

  const searchedMoviesLength = Object.keys(searchedMovies).length;

  return (
    <>
      <SearchBar
        searchMovies={searchMovies}
        searchedMovies={searchedMovies}
        background={background}
      />
      {searchedMoviesLength > 1 && (
        <MovieDetails
          searchedMovies={searchedMovies}
          handleOnClick={handleOnClick}
          WishListArg={WishListArg}
        />
      )}

      <hr />
      <WishList
        title="Your Movie WishList"
        WishListArg={WishListArg}
        handleOnDelete={handleOnDelete}
        searchedMovies={searchedMovies}
      />
      <hr />
      <WishList
        title="Action Movies"
        WishListArg={WishListArg}
        genre="Action"
        handleOnDelete={handleOnDelete}
        searchedMovies={searchedMovies}
      />
      <hr />
      <WishList
        title="Comedy Movies"
        WishListArg={WishListArg}
        genre="Comedy"
        handleOnDelete={handleOnDelete}
        searchedMovies={searchedMovies}
      />
    </>
  );
};

export default MovieWishListContainer;
