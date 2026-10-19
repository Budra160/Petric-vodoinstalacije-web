import "./card.css";
import Button from "./Button";

const cardContent = [
{
    tagline: "01 - bez iskopa",
    title: "Sanacija epox smolom",
    subTitle: "Obnova cijevi iznutra",
    content: "U postojeću cijev ugrađujemo novu unutarnju stijenku od epoxy smole. Rezultat je nova cijev unutar stare — glatka, izdržljiva i otporna na koroziju, korijenje i habanje.",
    id: "epoxy"
},
{
    tagline: "02 - KRUNOVSKO BUŠENJE",
    title: "Bušenje krunama",
    subTitle: "Precizni otvori u betonu",
    content: "Dijamantne krune omogućuju bušenje otvora velikog promjera bez vibracija, pucanja i prašine — idealno za nove instalacije i ventilaciju u nastanjenim prostorima.",
    id: "krune"
},
{
    tagline: "03 - odštopavanje",
    title: "Odštopavanje",
    subTitle: "Rješavanje začepljenja",
    content: "Začepljeni odvodi, WC ili vanjska kanalizacija? Dolazimo s profesionalnom opremom — sajlama i visokotlačnim čistačima — i rješavamo uzrok, ne samo simptom.",
    id: "odštopavanje"
}]

export default function Card({tagText, title, subText, content, cardId}){
    return (
        <div className="card">
            <div className="tagline">{tagText}</div>
            <div className="card-content">
                <div className="card-heading">
                    <h3>{title}</h3>
                    <p className="sub">{subText}</p>
                </div>

                <p>{content}</p>

                <Button props={{id : cardId}}/>
            </div>
        </div>
    )
}
