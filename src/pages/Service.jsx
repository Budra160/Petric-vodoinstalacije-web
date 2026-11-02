import "./service.css"
import Section from "../components/Section/index.jsx";
import SectionCta from "../components/CTA/index.jsx";
import Process from "../components/Process/index.jsx";
import { Link } from "react-router-dom";


export default function Service({contentData}){

    return(
        <>
            <Section
                tagText={
                    <div className="tagline">
                      <span className="accent-tag">//</span> {contentData.hero.tagline}
                    </div>
                  }
                  props={{ id: contentData.hero.id }}
                  title={
                    <>
                      <h1>{contentData.hero.titleh1}</h1>
                      <p>
                         {contentData.hero.content}
                      </p>
                    </>
                  }
            ></Section>
            <Section
                tagText={
                    <div className="tagline">
                        {contentData.about.tagline}
                    </div>
                }
                title={
                    <>
                        <h2>{contentData.about.title}</h2>
                    </>
                }
                children={
                    <p>{contentData.about.content}</p>
                }

            ></Section>
            <Section
                tagText={
                    <div className="tagline">
                        {contentData.process.tagline}
                    </div>
                }
                title={
                    <h2>{contentData.process.title}</h2>
                }
                children={
                    <Process
                        title={contentData.process.pTitle}
                        data={contentData.process.data}
                    ></Process>
                }
            ></Section>
            <SectionCta
                title={contentData.cta.title}
                desc={contentData.cta.description}
                id={"cta"}
            children={<Link to="/contact" className="button accent">Zatraži procjenu</Link>}
            >
            </SectionCta>
        </>
    )
}