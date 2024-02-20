import React, { useState } from "react";
import "../styles/_table.scss";

// can use toastify to show that the contract has been added.
// example
// import Toastify from "toastify-js";
// import "toastify-js/src/toastify.css";

const AddForm = ({ handleAddFormSubmit, handleAddFormChange }) => {
  return (
    <div>
      <h2>Add a contract</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="projectID"
          required="required"
          placeholder="Enter project ID such as GM0052..."
          onChange={handleAddFormChange}
        ></input>
        <input
          type="text"
          name="equipment"
          required="required"
          placeholder="Enter equipment name such as GIS or transformer..."
          onChange={handleAddFormChange}
        ></input>
        <input
          type="text"
          name="contractNum"
          required="required"
          placeholder="Enter the contract#, in this case, the SAP PO#..."
          onChange={handleAddFormChange}
        ></input>
        <input
          type="text"
          name="CP"
          required="required"
          placeholder="Enter the name of the Contract Professional..."
          onChange={handleAddFormChange}
        ></input>
        <input
          type="text"
          name="status"
          required="required"
          placeholder="Enter the status of the contract..."
          onChange={handleAddFormChange}
        ></input>
        <input
          type="text"
          name="comment"
          required="required"
          placeholder="Enter the comments for this contract..."
          onChange={handleAddFormChange}
        ></input>
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default AddForm;
