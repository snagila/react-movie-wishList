import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

const TopDisplay = () => {
  return (
    <>
      <div className="wrapper d-flex justify-content-center align-items-center ">
        <form action="">
          <div class="row g-2 mt-5 shadow-lg border p-5 rounded">
            <div class="col-md-8">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Movie Name"
                aria-label="Task"
                id="task"
                name="task"
                required
              />
            </div>

            <div class="col-md-4 d-grid">
              <button class="btn btn-primary" type="submit">
                Add New Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TopDisplay;
