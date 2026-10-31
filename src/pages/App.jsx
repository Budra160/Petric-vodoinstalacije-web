import SectionHero from "../components/Hero/index.jsx";
import Section from "../components/Section/index.jsx";
import Card from "../components/Card/index.jsx";
import SectionCta from "../components/CTA/index.jsx";
import "./App.css";
import Button from "../components/Button/index.jsx";
import { cardContent } from "../constants.jsx";

function App() {
  return (
    <>
      <SectionHero />
      <Section
        tagText={<div className="tagline">01 - Usluge</div>}
        title={<h2>Tri specijalnosti. Jedan standard izvedbe.</h2>}
        children={
          <div className="cards-wrapper">
            {cardContent.map((data) => {
              return (
                <Card
                  tagText={data.tagline}
                  title={<h3>{data.title}</h3>}
                  subText={data.subTitle}
                  content={data.content}
                  key={data.id}
                  id={data.id}
                />
              );
            })}
          </div>
        }
      ></Section>
      <SectionCta
        tagText={"// Spremni za novi projekt?"}
        title={"Zatražite procjenu"}
        desc={"Bez skrivenih troškova. Poštena procjena na vašoj adresi."}
        id={"cta"}
        children={<Button className="button accent">Pošalji upit</Button>}
      ></SectionCta>
    </>
  );
}

export default App;
