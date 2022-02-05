import "./Routing.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import Menu from "../Menu/Menu";

const Routing = () => {
    return (
        <>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/"/>
                    <Route path="/menus" element={<Navigate replace to="/menus/restaurant" />} />
                    <Route path="/menus/:roomId" element={<Menu/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact"/>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}
export default Routing;