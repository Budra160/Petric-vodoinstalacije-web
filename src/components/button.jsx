import "./button.css";

export default function Button({ children, className = "button", ...props }) {
  <button className={className} {...props}>
    {children}
  </button>;
}
