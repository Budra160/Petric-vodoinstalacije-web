import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./button.jsx";
import "./header.css";

export default function CreateNav() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a className="skip" href="#glavni-sadrzaj">
        Preskoci na sadrzaj
      </a>
      <header>
        <NavLogo />

        <nav
          className="h-nav"
          style={{ height: isOpen ? "17.85rem" : "0px" }}
          aria-label="Glavna navigacija"
        >
          <ul className="nav-links">
            <li>
              <Link to="/home">Naslovnica</Link>
            </li>
            <li>
              <Link to="/">Epoxy</Link>
            </li>
            <li>
              <Link to="/">Faq</Link>
            </li>
            <li>
              <Link to="/">Kontakt</Link>
            </li>
          </ul>

          <div className="button-group">
            <Button className="button accent">Pozovi</Button>
            <Button className="button">Upit</Button>
          </div>
        </nav>

        <svg
          aria-label="Gumb za otvaranje menija"
          onClick={() => setIsOpen(!isOpen)}
          className="hb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          stroke="currentColor"
          strokeWidth=".6"
          fill="rgba(0,0,0,0)"
          strokeLinecap="round"
        >
          <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
            <animate
              dur="0.2s"
              attributeName="d"
              values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
              fill="freeze"
              begin="start.begin"
            />
            <animate
              dur="0.2s"
              attributeName="d"
              values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
              fill="freeze"
              begin="reverse.begin"
            />
          </path>
          <rect width="10" height="10" stroke="none">
            <animate
              dur="2s"
              id="reverse"
              attributeName="width"
              begin="click"
            />
          </rect>
          <rect width="10" height="10" stroke="none">
            <animate
              dur="0.001s"
              id="start"
              attributeName="width"
              values="10;0"
              fill="freeze"
              begin="click"
            />
            <animate
              dur="0.001s"
              attributeName="width"
              values="0;10"
              fill="freeze"
              begin="reverse.begin"
            />
          </rect>
        </svg>
      </header>
    </>
  );
}

export function NavLogo() {
  return (
    <div className="logo-wrapper">
      <div className="logo-left">
        <p>
          petrić<span>.</span>
        </p>
      </div>
      <div className="logo-right">
        <p>vodoinstalacije</p>
      </div>
    </div>
  );
}
