import {  useState,useEffect } from "react";
import { Link } from "react-router-dom";
export default function Navbar({theme,settheme}) {
  const [active, setActive] = useState("home");
useEffect(()=>{
  if(theme==="dark"){
    document.body.classList.add("dark-theme");
    console.log(theme);
  }
  else{
    document.body.classList.remove("dark-theme");
  }
},[theme])
  return (
    <div className="navbar fixed-top container text-center mt-5 mb-5 d-flex justify-content-around">
      <div className="navbar_links">
        <Link
          to="/"
          className={`ms-5 fs-5 ${active === "home" ? "active" : "inactive"}`}
          onClick={() => setActive("home")}
          title="Home"
        >
          <i className="fa-regular fa-house"></i>
        </Link>

        <Link
          to="/projects"
          className={`ms-5 fs-5 ${active === "project" ? "active" : "inactive"}`}
          onClick={() => setActive("project")}
          title="Projects"
        >
          <i className="fa-solid fa-code"></i>
        </Link>

        <Link
          to="/about"
          className={`ms-5 fs-5 ${active === "about" ? "active" : "inactive"}`}
          onClick={() => setActive("about")}
          title="About"
        >
          <i className="fa-solid fa-user"></i>
        </Link>

        <Link
          to="/certificate"
          className={`ms-5 fs-5 ${active === "resume" ? "active" : "inactive"}`}
          onClick={() => setActive("resume")}
          title="Certificates"
        >
          <i className="fa-regular fa-file"></i>
        </Link>

        <Link to="https://github.com/sahilsheikh230" className="ms-5 fs-5" title="Github">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/sahil-sheikh-7613142a6/" className="ms-5 fs-5" title="LinkedIn">
          <i className="fa-brands fa-linkedin"></i>
        </Link>



{theme==="dark" && 
       <i
          className="fa-regular fa-sun ms-5 fs-5"
          onClick={() => settheme("light")}
          title="Light mode"
          style={{ cursor: "pointer" }}
        ></i>}
{theme=="light" &&
        <i
          className="fa-solid fa-moon ms-5 fs-5"
          onClick={() => settheme("dark")}
          title="Dark mode"
          style={{ cursor: "pointer" }}
        ></i>}
      </div>
    </div>
  );
}
