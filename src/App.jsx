import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News";
import ContactPage from "./Pages/Contact";
import LoginPage from "./Pages/Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
