import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>SignUpPage Coming Soon</h1>
      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};

export default SignUpPage;
