import "./style.css"
import Button from "../Button/index.jsx"
import { useRef } from "react";
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha";

export default function Form(){
    const recaptcha = useRef(null);
    const formRef = useRef();

    const sendEmail = async (e) => {

        e.preventDefault();
        const form = e.target.closest("form");
        const label = document.createElement("span");
        const captchaValue = recaptcha.current.getValue();
        
        if(!captchaValue)
            alert("reCaptcha is not completed");
        else
        {
        emailjs
          .sendForm("service_ea36g89","template_o9rve9o", formRef.current, {
            publicKey: "C3WaBVbsG1HSkJuKD",
          })
          .then(
            () => {
              console.log("SUCCESS");
              label.textContent = "Uspiješno ste poslali poruku";
              form.appendChild(label);
              setTimeout(() => {
                form.removeChild(label);
              }, 5000);
            },
            (error) => {
              console.log('FAILED...', error.text);
              label.textContent = "Nešo je pošlo po zlu";
              form.appendChild(label);
              setTimeout(() => {
                form.removeChild(label);
              }, 5000);
            },
          );
        }
    }
    return (

            <form ref={formRef} action={"?"} method="POST" onSubmit={(e) => {e.preventDefault(); sendEmail(e); e.target.closest("form").reset()}}>
                <div className="field-wrapper">
                    <label htmlFor="ime">
                        Ime i prezime
                        <input
                            id="ime"
                            name="ime"
                            type="text"
                            required
                            minLength={2}
                            placeholder="npr. Marko Horvar"
                        ></input>
                    </label>
                    <label htmlFor="email">
                        E-mail
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="markohorvat@gmail.com"
                        ></input>
                    </label>
                </div>

                <label htmlFor="tema">
                    Tema
                    <select
                        id="tema"
                        name="tema"
                    >
                        <option value={"Epoxy sanacija"}>Epoxy sanacija</option>
                        <option value={"Bušenje kruna"}>Bušenje kruna</option>
                        <option value={"Odštopavanje"}>Odštopavanje</option>
                        <option value={"Ostalo"}>Ostalo</option>
                    </select>
                </label>

                <label htmlFor="poruka">
                    Poruka
                    <textarea
                        id="poruka"
                        name="poruka"
                        rows={4}
                        placeholder="Opišite vaš upit ili problem..."
                    >
                    </textarea>
                </label>

                <ReCAPTCHA ref={recaptcha} sitekey={"6Lf-GgcuAAAAAOBBrfxEmcoe9WdMMyRhNYg8lYXD"}></ReCAPTCHA>
                <Button className="button accent">Pošalji upit</Button>
            </form>
    )
}