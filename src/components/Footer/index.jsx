import "./style.css";
import { NavLogo } from "../Header";
import { Link } from "react-router-dom";

export function scrollToTop(){
  window.scrollTo({ top: 0, behavior: "smooth" })
};

export default function Footer() {
  return (
    <footer>
      <div className="container-large padding-section-medium">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-h2-wrapper">
              <NavLogo />
              <p>
                Inovativni pristup sanaciji kanalizacije epoxy smolom,
                dijamantnom bušenju kruna i odštopavanju. Bjelovar i okolica.
              </p>
            </div>
            <nav className="footer-nav">
              <div className="footer-tagline">
                <p>Navigacija</p>
              </div>
              <ul className="footer-links">
                <li>
                  <Link onClick={scrollToTop} to="/">Naslovnica</Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/epoxy">Epoxy</Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/krune">Bušenje Krunama</Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/odstop">Odštopavanje</Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/faq">Faq</Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/contact">Kontakt</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer-bottom">
            <small>@2026 Petrić Vodoinstalacije</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
