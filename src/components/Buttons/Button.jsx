import { Link } from "react-router-dom";

import "./Button.scss";

const Button = (props) => {
    const { type, text, to, onClick} = props;

    if (type === "menu") {
        return <Link to={to}><button className="button-menu" onClick={onClick}>{text}</button></Link>
    } else if (type === "simple") {
        return <button className="button-simple" onClick={onClick}>{text}</button>
    } else {
        return <Link className="button">{text}</Link>
    }
}

export default Button;