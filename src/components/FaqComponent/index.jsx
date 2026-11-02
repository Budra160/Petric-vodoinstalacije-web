import "./style.css";
import {useState } from "react";
import Button from "../Button/index"

export default function FaqComp({constant}){
    const [isOpen, setIsOpen] = useState(false);

    function showContent(event) {
        event.preventDefault();
        
        const item = event.target.closest(".faq-item");

        if(!isOpen){
        item.classList.add("open");
        setIsOpen(true);
        }
        else if(isOpen){
        item.classList.remove("open");
        setIsOpen(false);
        }
    }

    return(
        <div className="faq-wrapper">
            {constant.map(item => (
                <div onClick={showContent} className="faq-item" key={item.id}>
                    <Button className="faq-question">
                        <span className="faq-num">0.{item.id + 1}</span>
                        <h3>{item.question}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24"><path fill="var(--accent)" d="M11 17v4h2v-8h8v-2h-8V3h-2v8H3v2h8z"/></svg>
                    </Button>
                    <div className="faq-answer">
                        <p>{item.answer}</p>
                    </div>   
                </div>
            ))}
        </div>
    );

}

