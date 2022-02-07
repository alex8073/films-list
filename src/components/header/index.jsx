import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="blue darken-1 z-depth-2">
            <div className="container">
                <nav className="z-depth-0">
                    <div className="nav-wrapper blue darken-1">
                        <ul className="left">
                            <li>
                                <NavLink
                                    exact={true}
                                    to="/"
                                    className="flow-text white-text"
                                    activeClassName="yellow-text text-accent-4"
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/films"
                                    className="flow-text white-text"
                                    activeClassName="yellow-text text-accent-4"
                                >
                                    Фильмы
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};
