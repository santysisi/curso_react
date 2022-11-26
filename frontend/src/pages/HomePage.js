import React from "react";

import "../styles/components/pages/HomePage.css"

export default function HomePage() {
    return (
        <main className="holder"> 
            <div className="homeimg">
                <img src="images/descarga.jpg" alt="Avion" />
            </div>
            <div className="columnas">
                <section class="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>En este blog encontrar informacion sobre mi vida privada que ire compartiendo con ustedes y ... </p>
                </section>  
            </div>
        </main>
    )
}