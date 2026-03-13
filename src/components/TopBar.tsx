import './TopBar.css';
import favicon from '../assets/favicon.svg';
import {NavLink} from "react-router";
import {ThemeButton} from "./ThemeButton.tsx";

interface TopBarProps {
    title: string;
}

const TopBar = ({title} : TopBarProps) => {
    return (
        <header className="app-header">
            <NavLink
                to="/"
            >
                <img
                    className="favicon"
                    src={favicon}
                    alt=""
                />
                <span className="header__title">{title}</span>
            </NavLink>
            <ThemeButton/>
        </header>
    )
}

export default TopBar;