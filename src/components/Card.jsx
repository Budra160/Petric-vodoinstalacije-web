import "./carda.css";
import Button from "./Button";


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

                <Button id={cardId} children={"Saznaj više"}/>
            </div>
        </div>
    )
}

