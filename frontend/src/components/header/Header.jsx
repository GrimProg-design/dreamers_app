import { Link } from "react-router-dom"
import "./style/mainHeader.css"

export default function Header() {
    return(
        <div className="header_wrapper">
            <div className="logo_wrapper">Dreamers_fun</div>
            <nav className="nav_wrapper">
                <Link to="/home">Home</Link>
                <Link to="/myfandoms">My fandoms</Link>
            </nav>
            <div className="user_wrapper">
                user & settings
            </div>
        </div>
    )
}