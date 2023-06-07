import React from "react";
import styled from "styled-components";
// Import Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
// Import Components
import Nav from "./components/Nav";
// Import Router
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <style>
                @import
                url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
            </style>
            <GlobalStyle></GlobalStyle>
            <Nav></Nav>
            <Routes>
                <Route path="/" exact element={<AboutUs />} />
                <Route path="/aboutus" exact element={<AboutUs />} />
                <Route path="/ourwork" exact element={<OurWork />} />
                <Route path="/contactus" exact element={<ContactUs />} />
            </Routes>
        </div>
    );
}

export default App;
