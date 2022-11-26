import React from "react";


import "../../styles/components/layout/Header.css"

export default function Header() {
    return (
        <header>
            <div className="holder">
                <img src="images/descarga.jpg" width={100} alt="Hola que tal"/>
                <h1>Titulo increible</h1>
            </div>
        </header>
    );
}