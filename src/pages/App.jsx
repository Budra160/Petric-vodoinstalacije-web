import SectionHero from "../components/SectionHero";
import Section from "../components/Section";
import Card, { cardContent } from "../components/card";
import SectionCta from "../components/SectionCta";
import { useEffect, useState } from "react";
import "./App.css";
import Button from "../components/Button";

 
function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    function generateCards(){
      setCards(cardContent.map(data => {
          return <Card tagText={data.tagline} title={data.title} subText={data.subTitle} content={data.content} key={data.id} id={data.id}/>
      }))
    } 

    generateCards();
  }, [cardContent])

  return (
    <>
      <SectionHero />
      <Section tagText={"01 - Usluge"} title={"Tri specijalnosti. Jedan standard izvedbe."} children={<div className="cards-wrapper">{cards}</div>}>
      </Section>
      <SectionCta tagText={"// Spremni za novi projekt?"} title={"Zatražite procjenu"} desc={"Bez skrivenih troškova. Poštena procjena na vašoj adresi."} id = {"cta"} children={<Button className="button accent">Pošalji upit</Button>}>
      </SectionCta>
    </>
  );
}

export default App;
