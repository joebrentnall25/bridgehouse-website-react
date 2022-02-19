import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Button.scss";

const Button = (props) => {
    const { type, text, to, onClick, buttonType} = props;

    if (type === "menu") {
        return <Link to={to}><button className="button-menu" onClick={onClick}>{text}</button></Link>
    } else if (type==="menu-sub") {
        return <HashLink to={"#"+to} className="button-menu-sub">{text}</HashLink>
    } else if (type === "simple") {
        return <button className="button-simple" onClick={onClick}>{text}</button>
    } else if (type === "form") {
        return <button type={buttonType} className="button-form">{text}</button>
    } else {
        return <button className="button">{text}</button>
    }
}

export default Button;