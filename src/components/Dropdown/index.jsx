import "./style.css";
import {useState } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({link}){
    const [isOpen, setIsOpen] = useState(false);

    function showContent(event) {
        event.preventDefault();
        
        const item = event.target.closest(".dropdown");

        if(!isOpen){
        item.classList.add("open");
        setIsOpen(true);
        }
        else if(isOpen){
        item.classList.remove("open");
        setIsOpen(false);
        }
    }

    function focusShow(event){
        event.preventDefault();
        const dropdown = event.target.closest(".dropdown")
        const item = event.target.closest(".dropdown-menu a");
        console.log(item, event.target);

        setIsOpen(true);
        dropdown.classList.add("open");

        if(event.target.dataset.id === "close")
        {
            setIsOpen(false);
            dropdown.classList.remove("open");
        }
    } 

    return(
        <div onClick={showContent} onFocus={focusShow} className="dropdown">
            <a className="dropdown-text">
                Usluge
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 9.343L12 15L6.343 9.343"/></svg> 
            </a>
            <div className="dropdown-menu">
                {link.map(link => {
                    return <NavLink key={link.path} to={"/" + link.path}>{link.text}</NavLink>
                })}
                <a href="." aria-hidden="true"  data-id="close" style={{padding:"0rem", margin:"0rem"}}></a>
            </div>   
        </div>
    );

}

