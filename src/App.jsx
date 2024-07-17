import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import SideNav from "./components/SideNav/SideNav";
import { Routes, Route } from "react-router-dom";
import { Navbar, Offcanvas } from "react-bootstrap";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Work from "./pages/Work/Work";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="app container-fluid">
      <Navbar
        className="mb-3 position-fixed top-0 start-0 end-0 d-block d-lg-none navbar navbar-light"
        style={{ zIndex: "1000" }}
        expand="lg"
      >
        <div className="container-fluid">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleShow}
          />
        </div>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <SideNav handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
      <div className="row">
        <SideBar />
        <div className="p-0 col-md-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
