import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </div>
    );
}