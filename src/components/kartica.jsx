import "./carda.css";
import Button from "./button.jsx";

export default function Card({ tagText, title, subText, content, id }) {
  return (
    <div className="card">
      {tagText ? <div className="tagline">{tagText}</div>: ""}
      <div className="card-content">
        <div className="card-heading">
          {title}
          {subText ? <p className="sub">{subText}</p>: <></>}
        </div>

        <p>{content}</p>

        {id ? <Button id={id} children={"Saznaj više"} />:<></>}
      </div>
    </div>
  );
}
