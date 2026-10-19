import SectionHero from "../components/SectionHero";
import Section from "../components/Section";
import Card from "../components/card";
import { useEffect } from "react";
import "./App.css";

 
function App() {
  let cards;

  useEffect(() => {
    function generateCards(){
      cards = cardContent.map(data => {
          <Card tagText={data.tagline} title={data.title} subText={data.subTitle} content={data.content} cardId={data.id}/>
      })

      console.log(cards);
    } 

    generateCards();
  }, [cardContent])

  return (
    <>
      <SectionHero />
      <Section tagText={"01 - Usluge"} title={"Tri specijalnosti. Jedan standard izvedbe."} children={<div className="cards-wrapper"> </div>}>
        
      </Section>
    </>
  );
}

export default App;
