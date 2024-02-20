/* ------------------ SCSS IMPORTS ------------------ */
import "../index.scss";
/* ---------------- COMPONENT IMPORTS ---------------- */
import Table from "../components/Table";
import AddForm from "../components/AddForm";

import React from "react";

const MainPage = () => {
  return (
    <div>
      <h1>Contract Status</h1>
      <Table />
    </div>
  );
};

export default MainPage;
