import "./contact.css";
import "./epoxy-s.css";
import Section from "../components/Section/index.jsx";
import Form from "../components/Form/index.jsx";

export default function Contact() {
  return (
    <>
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
                  <a>Kneza Višeslava 21, 43000 Bjelovar</a>
                </li>
                <li>
                  <p>E-Mail</p>
                  <a>info@petric-vodoinstalacije.hr</a>
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
    </>
  );
}
