import "./style.css";
import { faqItems } from "../../constants";

export default function FaqComp(){

    return(
        <div className="faq-wrapper">
            {faqItems.map(item => (
                <button className="faq-item" key={item.id}>
                    <div className="faq-question">
                        <span className="faq-num">{item.id + 1}</span>
                        <h3>{item.question}</h3>
                    </div>
                    
                </button>
            ))}
        </div>
    );

}

