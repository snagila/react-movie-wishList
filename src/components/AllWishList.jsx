import React from "react";
import { MovieCard } from "./MovieCard";

const AllWishList = () => {
  return (
    <>
      <div className="d-flex">
        <h4 className="">My WishList</h4>
        <div className="scroll-container">
          <table className="scrollable-table">
            <tbody>
              <MovieCard />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllWishList;
