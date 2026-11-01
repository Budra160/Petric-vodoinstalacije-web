import "./contact.css";
import "./epoxy-s.css";
import Section from "../components/Section/index.jsx";
import Form from "../components/Form/index.jsx";
import { ConsentProvider, ConsentBanner } from "react-hook-consent";
import 'react-hook-consent/dist/styles/style.css';

export default function Contact() {
  return (
    <ConsentProvider
      options={{
        services: [
          {
            id: 'recaptcha',
            name: 'Google reCAPTCHA',
            // You can declare cookies, localStorage keys, or scripts to load
            cookies: [{ pattern: 'recaptcha' }],
            localStorage: ['recaptcha-cache'],
          },
        ],
      }}
    >
      <Section
        tagText={
          <div className="tagline">
            <span className="accent-tag">//</span> kontakt
          </div>
        }
        props={{ id: "epoxy-hero" }}
        title={
          <>
            <h1>Javite se — tu smo za vas.</h1>{" "}
            <p>
              Imate pitanje o usluzi, trebate procjenu ili hitnu intervenciju?
            </p>{" "}
          </>
        }
      ></Section>
      <Section
        tagText={<span className="tagline">01 - Kontakt</span>}
        title={<h2>Kontaktirajte nas</h2>}
        children={
          <div className="contact-content">
            <div className="contact-left">
              <p>
                Bilo da planirate sanaciju, trebate otvor za instalacije ili
                hitno odštopavanje — javite se. Volimo riješiti problem brzo i
                temeljito.
              </p>
              <ul className="contact-list">
                <li>
                  <p>Telefon</p>
                  <a href="tel:0977120700">097-712-0700</a>
                </li>
                <li>
                  <p>E-Mail</p>
                  <a href="mailto:info@petric-vodoinstalacije.hr">info@petric-vodoinstalacije.hr</a>
                </li>
                <li>
                  <p>Radno vrijeme</p>
                  <p>Pon-Pet: 08:00-16:00</p>
                </li>
              </ul>
            </div>
            <div className="contanct-right">
              <Form></Form>
            </div>
          </div>
        }
      ></Section>
      <ConsentBanner>
        This site uses third-party cookies for security (reCAPTCHA). Do you
        consent?
      </ConsentBanner>
    </ConsentProvider>
  );
}
