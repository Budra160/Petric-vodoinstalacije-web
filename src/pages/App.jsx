import SectionHero from "../components/SectionHero.jsx";
import Section from "../components/Section.jsx";
import Card from "../components/kartica.jsx";
import SectionCta from "../components/SectionCta.jsx";
import "./App.css";
import Button from "../components/button.jsx";
const cardContent = [
  {
    tagline: "01 - bez iskopa",
    title: "Sanacija epox smolom",
    subTitle: "Obnova cijevi iznutra",
    content:
      "U postojeću cijev ugrađujemo novu unutarnju stijenku od epoxy smole. Rezultat je nova cijev unutar stare — glatka, izdržljiva i otporna na koroziju, korijenje i habanje.",
    id: "epoxy",
  },
  {
    tagline: "02 - KRUNOVSKO BUŠENJE",
    title: "Bušenje krunama",
    subTitle: "Precizni otvori u betonu",
    content:
      "Dijamantne krune omogućuju bušenje otvora velikog promjera bez vibracija, pucanja i prašine — idealno za nove instalacije i ventilaciju u nastanjenim prostorima.",
    id: "krune",
  },
  {
    tagline: "03 - odštopavanje",
    title: "Odštopavanje",
    subTitle: "Rješavanje začepljenja",
    content:
      "Začepljeni odvodi, WC ili vanjska kanalizacija? Dolazimo s profesionalnom opremom — sajlama i visokotlačnim čistačima — i rješavamo uzrok, ne samo simptom.",
    id: "odštopavanje",
  },
];

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
