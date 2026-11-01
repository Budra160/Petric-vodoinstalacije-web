import "./style.css";
import { faqItems } from "../../constants";
import Button from "../Button/index"

export default function FaqComp(){

    return(
        <div className="faq-wrapper">
            {faqItems.map(item => (
                <Button className="faq-item">
                    <div className="faq-question">
                        <span className="faq-num">{item.id + 1}</span>
                        <h3>{item.question}</h3>
                    </div>
                </Button>
            ))}
        </div>
    );

}

