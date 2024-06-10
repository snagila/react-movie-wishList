import React from "react";
import Pic from "../assets/a.jpg";
import { Button, Stack } from "react-bootstrap";
import { MovieCard } from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ResultContainer = () => {
  return (
    <>
      <div className="results d-flex gap-3 justify-content-evenly align-items-center">
        <img src={Pic} alt="" />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          reprehenderit temporibus, beatae, atque cupiditate impedit quis vitae
          odit exercitationem perspiciatis consequuntur repudiandae doloremque
          veniam odio totam eius ex fugit est.
        </div>

        <div className="buttons d-flex flex-column gap-1">
          <Button>+ wishlist</Button>
          <Button>+ Action</Button>
          <Button>+ Comedy</Button>
        </div>
      </div>
    </>
  );
};
export default ResultContainer;
