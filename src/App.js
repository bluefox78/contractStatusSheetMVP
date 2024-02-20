/* ---------------- REACT IMPORTS ---------------- */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* ------------------ SCSS IMPORTS ------------------ */
import "./index.scss";
/* ---------------- PAGE IMPORTS ---------------- */

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
/* ---------------- COMPONENT IMPORTS ---------------- */
// import Table from "./components/Table";
// import AddForm from "./components/AddForm";

const App = () => {
  return (
    // <MainPage />
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
