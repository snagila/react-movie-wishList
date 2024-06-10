import React from "react";
import TopDisplay from "./TopDisplay";
import AllWishList from "./AllWishList";
import Action from "./Action";
import Comedy from "./Comedy";
import ResultContainer from "./ResultContainer";

const MovieWishListContainer = () => {
  return (
    <>
      <TopDisplay />
      <ResultContainer />
      <AllWishList />
      <Action />
      <Comedy />
    </>
  );
};

export default MovieWishListContainer;
