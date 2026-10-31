import "./epoxy-s.css";
import Section from "../components/Section/index.jsx";
import Button from "../components/Button/index.jsx";
import Card from "../components/Card/index.jsx";
import SectionCta from "../components/CTA/index.jsx";
import { whyCardContent, processSteps } from "../constants.jsx";

export default function Epoxy() {
  return (
    <>
      <Section
        tagText={
          <div className="tagline">
            <span className="accent-tag">//</span> glavna specijalnost
          </div>
        }
        props={{ id: "epoxy-hero" }}
        title={
          <>
            <h1>Sanacija epoxy smolom.</h1>{" "}
            <p>
              Bez iskopa, bez nereda, bez brige. Nova cijev unutar stare —
              trajno rješenje s 10 godina jamstva.
            </p>{" "}
          </>
        }
        children={<Button className="button accent">Zatraži procjenu</Button>}
      ></Section>
      <Section
        tagText={<div className="tagline">01 - što je sanacija epoxy-em</div>}
        title={<h2>Što je sanacija epoxy smolom?</h2>}
        children={
          <div className="about-content">
            <div className="about-left">
              <p>
                <b>Sanacija epoxy smolom</b> je suvremena, beziskopna metoda
                obnove dotrajalih kanalizacijskih cijevi. Umjesto da kopamo
                dvorište i razbijamo podove, u postojeću cijev ugrađujemo novu,
                glatku unutarnju stijenku koja traje desetljećima.
              </p>
              <p>
                Postupak funkcionira tako da se očišćena cijev oblaže slojem{" "}
                <b>epoxy smole</b> koja se veže na stijenku i stvara novu,
                izdržljivu unutarnju cijev. Rezultat je praktički nova cijev —
                bez kopanja, bez nereda, s minimalnim utjecajem na vaš dom
              </p>
              <p>
                Ova metoda posebno je prikladna za stambene zgrade, obiteljske
                kuće, poslovne prostore i sve situacije gdje tradicionalni iskop
                nije praktičan, previše skup ili bi uzrokovao preveliku štetu.
              </p>
            </div>
            <Card
              title={<h3>Prednosti</h3>}
              subText={"saniranja cijevi epoxy-em"}
              content={
                <ul className="about-list">
                  <li>
                    <span>Bez iskopa</span> <span>✓</span>
                  </li>
                  <li>
                    <span>Bez nereda</span> <span>✓</span>
                  </li>
                  <li>
                    <span>otpornost na koroziju</span> <span>✓</span>
                  </li>
                  <li>
                    <span>Znatno manji trožkovi</span> <span>✓</span>
                  </li>
                  <li>
                    <span>Trajnost</span> <span>30+ god</span>
                  </li>
                </ul>
              }
            ></Card>
          </div>
        }
      ></Section>
      <Section
        tagText={<div className="tagline">02 - Kada sanirati</div>}
        title={<h2>Kada koristiti epoxy sanaciju?</h2>}
        children={
          <div className="why-cards">
            {whyCardContent.map((element) => (
              <Card
                key={element.id}
                title={
                  <>
                    <div className="card-icon">{element.svg}</div>{" "}
                    <h3>{element.title}</h3>
                  </>
                }
                content={<p>{element.content}</p>}
              ></Card>
            ))}
          </div>
        }
      ></Section>
      <Section
        tagText={<div className="tagline">03 - Proces</div>}
        title={<h2>Kako izvodimo epoxy sanaciju</h2>}
        children={
          <div className="process-content">
            <span className="process-tagline">
              Proces izvedbe<b> - Epoxy sanacije</b>
            </span>
            <ul className="process-list">
              {processSteps.map((element) => (
                <li key={element.id}>
                  <div className="icon">{"0" + (element.id + 1)}</div>
                  <div className="content">
                    <h3>{element.title}</h3>
                    <p>{element.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        }
      ></Section>
      <SectionCta
        title={"Spremni za epoxy sanaciju?"}
        desc={
          "Zatražite besplatnu procjenu — dolazimo na teren, dajemo poštenu ponudu."
        }
        id="cta"
        children={<Button className="button accent">Pošalji upit</Button>}
      ></SectionCta>
    </>
  );
}
