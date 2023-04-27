import React from "react";
// Import Global Styles
import GlobalStyle from "./components/GlobalStyle";
// Import Pages
import AboutUs from "./pages/AboutUs";

function App() {
    return (
        <div className="App">
            <GlobalStyle></GlobalStyle>
            <AboutUs></AboutUs>
        </div>
    );
}

export default App;
