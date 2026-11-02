import "./style.css"


export default function Process({title, data}){
  const dataArr = data.map((element) => (
    <li key={element.id}>
      <div className="icon">{"0" + (element.id + 1)}</div>
      <div className="content">
        <h3>{element.title}</h3>
        <p>{element.content}</p>
      </div>
    </li>
  ))

    return(
        <div className="process-content">
            <span className="process-tagline">
              Proces izvedbe<b> - {title}</b>
            </span>
            <ul className="process-list">
              {dataArr ? dataArr : ""}
            </ul>
          </div>
    );
}