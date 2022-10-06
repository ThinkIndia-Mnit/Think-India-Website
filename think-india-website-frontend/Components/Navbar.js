import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../Context/Auth/AuthContext";
import SectionDropdown from "./SectionDropdown";
import ModalContext from "../Context/Modal/ModalContext";
import CreateEvent from "./Event/CreateEvent";
import CreateAnnounce from "./Event/CreateAnnounce";

const Navbar = () => {
  const { session, user } = useContext(AuthContext);
  const { openModal, closeModal } = useContext(ModalContext);

  function tgl() {
    var menuIcon = document.getElementById("menuIcon");
    var menu = document.getElementById("menu");
    if (menuIcon && menu) {
      if (stts == 1) {
        menuIcon.classList.add("fa-close");
        menuIcon.classList.remove("fa-bars");
        menu.style.right = "0px";
        stts = 0;
      } else {
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-close");
        menu.style.right = "-100%";
        stts = 1;
      }
    }
  }

  return (
    <nav className="navbar navbar-inverse sticky-top container1">
      <div
        className="container-fluid nav1"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "row",
        }}
      >
        <div className="navbar-header">
          <img
            id="logo_ti"
            className="padding_logo"
            src="/images/thinkIndiaLogo.png"
            alt="thinkIndiaLogo"
          />
          <img
            id="logo_mnit"
            className="padding_logo"
            src="/images/Mnit_logo.png"
            alt="Mnit_logo"
          />
        </div>
        <ul className="nav navbar-nav heading headings">
          <li>
            <h1 id="heading1">THINK INDIA MNIT JAIPUR</h1>
            <h1 id="heading2">थिंक इंडिया MNIT जयपुर</h1>
          </li>
        </ul>
        <div className="menu" id="menu">
          <div className="menubtn" id="menubtn">
            <i id="menuIcon" className="fas fa-bars fa-3x bars" onClick={tgl} />
          </div>
          <div className="nav2">
            <ul id="navList">
              <li>
                <Link href="/">
                  <a>
                    <img src="/Logos/home.svg" alt="" /> Home
                    <div className="dropdown-content">
                      <p>Hello World!</p>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <div className="dropdown">
                  <a
                    href="#"
                    style={{ cursor: "auto" }}
                    className="dropbtn"
                    id="sectionNav"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <img src="/Logos/sections.svg" alt="" /> Sections{" "}
                    <img
                      src="/Logos/down_arrow.svg"
                      className="invertImg"
                      alt=""
                    />
                  </a>
                  <div className="dropdown-content">
                    <SectionDropdown sectionName="DIY" sectionLink="diy" />
                    <SectionDropdown
                      sectionName="ART & Design"
                      sectionLink="art"
                    />
                    <SectionDropdown
                      sectionName="Debating"
                      sectionLink="debating"
                    />
                    <SectionDropdown
                      sectionName="Entrepreneurship"
                      sectionLink="entp"
                    />
                    <SectionDropdown
                      sectionName="Heritage & Environment"
                      sectionLink="heritage"
                    />
                    <SectionDropdown
                      sectionName="Publicity & Management"
                      sectionLink="publicity"
                    />
                  </div>
                </div>
              </li>
              <li>
                <Link href="/event">
                  <a>
                    <img src="/Logos/event.svg" alt="" /> Event
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/Blogs/viewMore">
                <a>
                  <img src="/Logos/blog.svg" />
                  Blogs
                </a>
                </Link>    
              </li>
              <li>
                <Link href="/students_timj">
                <a>
                  <img src="/Logos/students.svg" alt="" /> 
                  Students Of TIMJ
                </a>
                </Link>
              </li>
              <li>
                <a href="https://www.thinkindiaorg.in/">
                  <img src="/Logos/timj.svg" alt="" /> Think India
                </a>
              </li>
              <li>
                <a href="http://www.mnit.ac.in/">
                  <img src="/Logos/mnit.svg" alt="" /> MNIT Jaipur
                </a>
              </li>
              {session && user && user.isAdmin && (
                <>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(<CreateEvent closeModal={closeModal} />);
                      }}
                    >
                      <img src="/Logos/mnit.svg" alt="" />
                      Create Event
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(<CreateAnnounce closeModal={closeModal} />);
                      }}
                    >
                      <img src="/Logos/mnit.svg" alt="" />
                      Announce
                    </a>
                  </li>
                </>
              )}
              {session && (
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    <img src="/Logos/logout.png" className="invertImg" alt="" />
                    Logout
                  </a>
                </li>
              )}
              {!session && (
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      signIn();
                    }}
                  >
                    <img src="/Logos/login.png" className="invertImg" alt="" />
                    Login
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
