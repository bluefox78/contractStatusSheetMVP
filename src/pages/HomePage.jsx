import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Supply Contracts Team</h1>
      <h2>
        This is the web application for viewing the most updated contracts info
        regarding any particular project
      </h2>
      <h3>For security reasons, please login to view the content:</h3>
      <button onClick={() => navigate("/login")}>Login Here</button>
    </div>
  );
};

export default HomePage;
