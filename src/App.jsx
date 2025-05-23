import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./BlogPage";  // Assuming BlogPage is your main page
import LinkPage from "./LinkPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LinkPage/>} />
      <Route path="/*" element={<BlogPage />} />
      <Route path="/:slug" element={<BlogPage />} />  {/* Route for slug */}
    </Routes>
  );
}

export default App;
