import "./section.css";

export default function Section({ children, title, tagText, props }) {
  return (
    <section {...props}>
      <div className="container-large padding-section-large">
        <div className="section-content">
          <div className="section-h2">
            {tagText}
            {title}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
