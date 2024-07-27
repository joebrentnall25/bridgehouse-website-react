import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Button.scss";

const Button = (props) => {
    const { type, text, to, onClick, buttonType, active, img, alt, isActive, className} = props;

    if (type === "primary") {
        return <Link to={to}><button className="button-primary">{text}</button></Link>
    }

    if (type === "secondary-onclick") {
        return <button 
            className="button-secondary" 
            onClick={onClick}>{text}</button>
    }

    else if (type === "secondary") {
        return <Link to={to}><button className="button-secondary">{text}</button></Link>
    } 

    else if (type === "tertiary") {
        return <Link to={to}><button className="button-tertiary">{text}</button></Link>
    }
    
    else if (type === "menu") {
        return (
            <button 
                className={`${isActive ? "button-menu--active" : "button-menu"} ${className}` }
                to={to+"#menu"}
                onClick={onClick}
            >
                {text}
            </button>
        )
    } 
    
    else if (type==="menu-sub") {
        return <HashLink to={"#"+to} className="button-menu-sub">{text}</HashLink>
    } 
    
    else if (type === "simple") {
        return <button className="button-simple" onClick={onClick}>{text}</button>
    } 
    
    else if (type === "form") {
        return <button type={buttonType} className="button-form">{text}</button>
    } 
    
    else if (type === "area") {
        if (active === "true") {
            return <button className="button-area--active" onClick={onClick}>{text}</button>
        } 
        return <button className="button-area" onClick={onClick}>{text}</button>
    } 

    else if (type === "footer") {
        return <HashLink to={to+"#nav"}>{text}</HashLink>
    }

    else if (type === "image") {
        return <a href={to} target="_blank" rel="noreferrer" className="button-img"><img src={img} alt={alt}/></a>
    }
    
    else {
        return <button className="button">{text}</button>
    }
}

export default Button;