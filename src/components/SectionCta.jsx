import "./section.css";

export default function SectionCta({
  children,
  title,
  tagText,
  desc,
  ...props
}) {
  return (
    <section {...props}>
      <div className="container-large padding-section-large">
        <div className="cta-filter"></div>
        <div className="section-content">
          <div className="tagline">{tagText}</div>
          <div className="section-h2">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
