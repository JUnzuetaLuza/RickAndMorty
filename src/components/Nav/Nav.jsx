import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"

export default function Nav(props) {
    return (
        <div className={style.bar}>
            <NavLink to="/home" >
                <button>Home</button>
            </NavLink>
            <NavLink to="/about" >
                <button>About</button>
            </NavLink>
            <NavLink to="/favorites" >
                <button>Favorites</button>
            </NavLink>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}