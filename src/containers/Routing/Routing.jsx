import "./Routing.scss";
import React from "react";
import {
  HashRouter as Router,
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
import Home from "../Home/Home";


const Routing = () => {
    return (
        <>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home"/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/menus" element={<Navigate replace to="/menus/restaurant"/>} />
                    <Route path="/menus/" element={<Menu/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </Router>
        </>
    )
}
export default Routing;