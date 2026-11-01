import "./style.css";


export default function Card({ tagText, title, subText, content, children }) {
  return (
    <div className="card">
      {tagText ? <div className="tagline">{tagText}</div> : ""}
      <div className="card-content">
        <div className="card-heading">
          {title}
          {subText ? <p className="sub">{subText}</p> : <></>}
        </div>

        {content}

        {children}
      </div>
    </div>
  );
}
