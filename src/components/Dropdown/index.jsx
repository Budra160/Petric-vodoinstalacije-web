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

    return(
        <div onClick={showContent} className="dropdown">
            <a className="dropdown-text">
                Usluge
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 9.343L12 15L6.343 9.343"/></svg> 
            </a>
            <div className="dropdown-menu">
                {link.map(link => {
                    return <NavLink key={link.path} to={"/" + link.path}>{link.text}</NavLink>
                })}
            </div>   
        </div>
    );

}

