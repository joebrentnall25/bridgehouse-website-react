import "./Routing.scss";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// Components
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import Menu from "../Menu/Menu";
import Contact from "../Contact/Contact";


const Routing = () => {
    return (
        <>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home"/>}/>
                    <Route path="/home" element={<Contact/>}/>
                    <Route path="/menus" element={<Navigate replace to="/menus/restaurant" />} />
                    <Route path="/menus/:roomId" element={<Menu/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}
export default Routing;