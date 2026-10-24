import "./epoxy-s.css";
import Section from "../components/Section.jsx"
import Button from "../components/button.jsx";
import Card from "../components/kartica.jsx";
import SectionCta from "../components/SectionCta.jsx"

const whyCardContent = [
    {
        id: 0,
        svg: <svg width="2rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21.5C13.8565 21.5 15.637 20.7625 16.9497 19.4497C18.2625 18.137 19 16.3565 19 14.5C19 12.5 18 10.6 16 9C14 7.4 12.5 5 12 2.5C11.5 5 10 7.4 8 9C6 10.6 5 12.5 5 14.5C5 16.3565 5.7375 18.137 7.05025 19.4497C8.36301 20.7625 10.1435 21.5 12 21.5V21.5Z" stroke="#0f2a47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
        title: "Puknute cijevi",
        content: "Kad cijev popusti zbog starosti, pritiska ili mehaničkog oštećenja — epoxy je trajno rješenje bez iskopa."
    },
    {
        id: 1,
        svg: <svg width="1.5rem" height="1.5rem" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 18V15.7994H5L12 6V8.26934H19L12 18Z" stroke="#0f2a47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
        title: "Korozija i dotrajalost",
        content: "Stare metalne i betonske cijevi korodiraju. Epoxy obloga zaustavlja koroziju i produljuje život cijevi."
    },
    {
        id: 2,
        svg: <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21H2C2 21.5523 2.44772 22 3 22V21ZM21 21V22C21.5523 22 22 21.5523 22 21H21ZM6 6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8V6ZM7 8C7.55228 8 8 7.55228 8 7C8 6.44772 7.55228 6 7 6V8ZM11 6C10.4477 6 10 6.44772 10 7C10 7.55228 10.4477 8 11 8V6ZM12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6V8ZM6 9C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11V9ZM7 11C7.55228 11 8 10.5523 8 10C8 9.44772 7.55228 9 7 9V11ZM11 9C10.4477 9 10 9.44772 10 10C10 10.5523 10.4477 11 11 11V9ZM12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9V11ZM6 12C5.44772 12 5 12.4477 5 13C5 13.5523 5.44772 14 6 14V12ZM7 14C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12V14ZM11 12C10.4477 12 10 12.4477 10 13C10 13.5523 10.4477 14 11 14V12ZM12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12V14ZM11 21V22H12V21H11ZM7 21H6V22H7V21ZM18 10C17.4477 10 17 10.4477 17 11C17 11.5523 17.4477 12 18 12V10ZM18.01 12C18.5623 12 19.01 11.5523 19.01 11C19.01 10.4477 18.5623 10 18.01 10V12ZM18 13C17.4477 13 17 13.4477 17 14C17 14.5523 17.4477 15 18 15V13ZM18.01 15C18.5623 15 19.01 14.5523 19.01 14C19.01 13.4477 18.5623 13 18.01 13V15ZM18 16C17.4477 16 17 16.4477 17 17C17 17.5523 17.4477 18 18 18V16ZM18.01 18C18.5623 18 19.01 17.5523 19.01 17C19.01 16.4477 18.5623 16 18.01 16V18ZM20.891 7.54601L20 8L20.891 7.54601ZM20.454 7.10899L20 8L20.454 7.10899ZM14.454 3.10899L14 4L14.454 3.10899ZM14.891 3.54601L14 4L14.891 3.54601ZM3.10899 3.54601L4 4L3.10899 3.54601ZM3.54601 3.10899L4 4L3.54601 3.10899ZM2 4.6V21H4V4.6H2ZM4.6 4H13.4V2H4.6V4ZM14 4.6V7H16V4.6H14ZM14 7V21H16V7H14ZM3 22H15V20H3V22ZM15 22H21V20H15V22ZM20 8.6V21H22V8.6H20ZM15 8H19.4V6H15V8ZM6 8H7V6H6V8ZM11 8H12V6H11V8ZM6 11H7V9H6V11ZM11 11H12V9H11V11ZM6 14H7V12H6V14ZM11 14H12V12H11V14ZM10 18V21H12V18H10ZM11 20H7V22H11V20ZM8 21V18H6V21H8ZM9 17C9.55228 17 10 17.4477 10 18H12C12 16.3431 10.6569 15 9 15V17ZM9 15C7.34315 15 6 16.3431 6 18H8C8 17.4477 8.44772 17 9 17V15ZM18 12H18.01V10H18V12ZM18 15H18.01V13H18V15ZM18 18H18.01V16H18V18ZM22 8.6C22 8.33647 22.0008 8.07869 21.9831 7.86177C21.9644 7.63318 21.9203 7.36344 21.782 7.09202L20 8C19.9707 7.94249 19.9811 7.91972 19.9897 8.02463C19.9992 8.14122 20 8.30347 20 8.6H22ZM19.4 8C19.6965 8 19.8588 8.00078 19.9754 8.0103C20.0803 8.01887 20.0575 8.0293 20 8L20.908 6.21799C20.6366 6.07969 20.3668 6.03562 20.1382 6.01695C19.9213 5.99922 19.6635 6 19.4 6V8ZM21.782 7.09202C21.5903 6.7157 21.2843 6.40973 20.908 6.21799L20 8L21.782 7.09202ZM13.4 4C13.6965 4 13.8588 4.00078 13.9754 4.0103C14.0803 4.01887 14.0575 4.0293 14 4L14.908 2.21799C14.6366 2.07969 14.3668 2.03562 14.1382 2.01695C13.9213 1.99922 13.6635 2 13.4 2V4ZM16 4.6C16 4.33647 16.0008 4.07869 15.9831 3.86177C15.9644 3.63318 15.9203 3.36344 15.782 3.09202L14 4C13.9707 3.94249 13.9811 3.91972 13.9897 4.02463C13.9992 4.14122 14 4.30347 14 4.6H16ZM14 4L15.782 3.09202C15.5903 2.7157 15.2843 2.40973 14.908 2.21799L14 4ZM4 4.6C4 4.30347 4.00078 4.14122 4.0103 4.02463C4.01887 3.91972 4.0293 3.94249 4 4L2.21799 3.09202C2.07969 3.36344 2.03562 3.63318 2.01695 3.86177C1.99922 4.07869 2 4.33647 2 4.6H4ZM4.6 2C4.33647 2 4.07869 1.99922 3.86177 2.01695C3.63318 2.03562 3.36344 2.07969 3.09202 2.21799L4 4C3.94249 4.0293 3.91972 4.01887 4.02463 4.0103C4.14122 4.00078 4.30347 4 4.6 4V2ZM4 4L3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202L4 4Z" fill="#0f2a47"></path> </g></svg>,
        title: "Stambene zgrade",
        content: "Vertikalne cijevi u zgradama idealne su za epoxy sanaciju — bez razbijanja kupaonica i uznemiravanja susjeda."
    }
]

const processSteps = [
    {
        id:0,
        title: "Dijagnostika kamerom",
        content: "Inspekcijskom kamerom pregledavamo unutrašnjost cijevi — utvrđujemo točnu poziciju oštećenja, promjer i duljinu sanacije."
    },
    {
        id:1,
        title: "Priprema cijevi",
        content: "Visokotlačnim čistačem uklanjamo naslage, kamenac i korijenje. Cijev mora biti potpuno čista za prihvat epoxy obloge."
    },
    {
        id:2,
        title: "Ugradnja epoxy obloge",
        content: "U cijev uvodimo epoxy smolu koja se ravnomjerno raspoređuje po cijeloj unutrašnjoj stijenci — stvara novi, glatki sloj."
    },
    {
        id:3,
        title: "Stvrdnjavanje",
        content: "Epoxy se stvrdnjava prema propisanom vremenu (ovisi o materijalu i temperaturi). Proces je kontroliran i bezopasan."
    },
    {
        id:4,
        title: "Kontrola i primopredaja",
        content: "Završnom inspekcijom provjeravamo debljinu sloja i protok. Zajedno s vama pregledavamo rezultat."
    },
]


export default function Epoxy(){

    return (
        <>
            <Section
                tagText={<div className="tagline"><span className="accent-tag">//</span> glavna specijalnost</div>}
                props={{id : "epoxy-hero"}}
                title={<><h1>Sanacija epoxy smolom.</h1> <p>Bez iskopa, bez nereda, bez brige. Nova cijev unutar stare — trajno rješenje s 10 godina jamstva.</p> </>}
                children={<Button className="button accent">Zatraži procjenu</Button>}
            >
            </Section>
            <Section
                tagText={<div className="tagline">01 - što je sanacija epoxy-em</div>}
                title={<h2>Što je sanacija epoxy smolom?</h2>}
                children={
                    <div className="about-content">
                        <div className="about-left">
                            <p>
                                <b>Sanacija epoxy smolom</b> je suvremena, beziskopna metoda obnove dotrajalih kanalizacijskih cijevi. Umjesto da kopamo dvorište i razbijamo podove, u postojeću cijev ugrađujemo novu, glatku unutarnju stijenku koja traje desetljećima.
                            </p>
                            <p>
                            Postupak funkcionira tako da se očišćena cijev oblaže slojem <b>epoxy smole</b> koja se veže na stijenku i stvara novu, izdržljivu unutarnju cijev. Rezultat je praktički nova cijev — bez kopanja, bez nereda, s minimalnim utjecajem na vaš dom
                            </p>
                            <p>Ova metoda posebno je prikladna za stambene zgrade, obiteljske kuće, poslovne prostore i sve situacije gdje tradicionalni iskop nije praktičan, previše skup ili bi uzrokovao preveliku štetu.</p>
                        </div>
                        <Card
                            title={<h3>Prednosti</h3>}
                            subText={"saniranja cijevi epoxy-em"}
                            content={
                                <ul className="about-list">
                                    <li><p>Bez iskopa</p> <p>✓</p></li>
                                    <li><p>Bez nereda</p> <p>✓</p></li>
                                    <li><p>otpornost na koroziju</p> <p>✓</p></li>
                                    <li><p>Znatno manji trožkovi</p> <p>✓</p></li>
                                    <li><p>Trajnost</p> <p>30+ god</p></li>
                                </ul>

                            }
                        ></Card>
                    </div>

                }
            >
            </Section>
            <Section
                tagText={<div className="tagline">02 - Kada sanirati</div>}
                title={<h2>Kada koristiti epoxy sanaciju?</h2>}
                children={
                    <div className="why-cards">
                        {whyCardContent.map(element => <Card key={element.id} title={<><div className="card-icon">{element.svg}</div> <h3>{element.title}</h3></>} 
                            content={<p>{element.content}</p>}>
                        </Card>)}
                    </div>
                }   
            >
            </Section>
            <Section
                tagText={<div className="tagline">03 - Proces</div>}
                title={<h2>Kako izvodimo epoxy sanaciju</h2>}
                children={
                    <div className="process-content">
                        <span className="process-tagline">Proces izvedbe<b> - Epoxy sanacije</b></span>
                        <ul className="process-list">
                            {processSteps.map(element => 
                                <li key={element.id}>
                                    <div className="icon">
                                        {"0" + (element.id + 1)}
                                    </div>
                                    <div className="content">
                                        <h3>{element.title}</h3>
                                        <p>{element.content}</p>
                                    </div>
                                </li>
                            )}                            
                        </ul>
                    </div>
                }
            >
            </Section>
            <SectionCta
                title={"Spremni za epoxy sanaciju?"}
                desc={"Zatražite besplatnu procjenu — dolazimo na teren, dajemo poštenu ponudu."}
                id="cta"
                children={<Button className="button accent">Pošalji upit</Button>}
            >
            </SectionCta>
        </>
    )
}