import "./button.css";

export default function Button({ children, className = "button" }) {
  return <button className={className}>{children}</button>;
}
