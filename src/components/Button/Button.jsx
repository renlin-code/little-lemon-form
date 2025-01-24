import "./Button.css"

function Button({ children, onClick, type, fullWidth }) {
  return <button type={type} className={`button${fullWidth ? " button--full-width" : ""}`} onClick={onClick}>{children}</button>;
}

export default Button;