import "./sectionhero.css"
import Button from "./Button"

export default function SectionHero({className = "section", ...props}){
    return(
        <section className={className} {...props}>
            <div className="container-large padding-section-large">
                <div className="hero-wrapper">
                    <div className="hero-content">
                        <div className="hero-top">
                            <h1>
                                Precizno
                                <span className="hero-accent">iznutra</span>
                                <span className="hero-border">prema van.</span>
                            </h1>
                        </div>
                    <div className="hero-bottom">
                        <p>Petrić Vodoinstalacije primjenjuje inovativni pristup vodoinstalacijama: sanaciju kanalizacije epoxy smolom bez iskopa, dijamantno bušenje kruna i profesionalno odštopavanje. Sve prema planu, s mjerljivim rezultatom.</p>
                        <Button className="button accent">Zatraži procjenu</Button>
                    </div>
                    </div>
                    <div className="hero-image-wrapper">

                    </div>
                    
                </div>
            </div>
        </section>
    )
}