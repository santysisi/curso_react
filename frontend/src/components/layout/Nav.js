import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/components/layout/Nav.css"

export default function Nav() {
    return(
        <div>
            <nav>
                <ul className="navPiola">
                    <li><NavLink activeClassName="activo" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="activo" to="/servicios">Servicios</NavLink></li>
                    <li><NavLink activeClassName="activo" to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName="activo" to="/contacto">Contacto</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}