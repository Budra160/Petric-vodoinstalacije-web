
import Section from "../components/Section";
import FaqComp from "../components/FaqComponent/index"

export default function Faq(){

    return (
        <>
            <Section
                tagText={
                  <div className="tagline">
                    <span className="accent-tag">//</span>faq
                  </div>
                }
                props={{ id: "epoxy-hero" }}
                title={
                  <>
                    <h1>Često postavljena pitanja.</h1>{" "}
                    <p>
                    Odgovori na najčešća pitanja o sanaciji, bušenju, odštopavanju i garancijama.
                    </p>{" "}
                  </>
                }
              >
            </Section>
            <Section
                tagText={
                    <div className="tagline">
                    <span className="accent-tag">//</span>faq
                  </div>
                }
                title={
                    <>
                        <h2>Sve  što trebate znati.</h2>  
                    </>
                }
                children={<FaqComp/>}
            >
            </Section>
        </>

    );
}