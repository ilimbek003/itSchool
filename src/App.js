import Imports from "./Imports/Imports";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import {Routes, Route} from "react-router-dom";
import Import from "./import/Import";

import React, {useState} from "react";
function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Imports />}  />
                <Route path="/catalog" element={<Import />}  />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
