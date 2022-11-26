import React from "react";

export default function NosotrosPage() {
    return (
        <main className="holder"> 
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, rem saepe. A enim qui facilis consectetur. Tempora dolores culpa libero a natus fugit ea ratione reprehenderit,
                consequuntur, debitis corrupti asperiores.</p> 
                <p>Ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, rem saepe. A enim qui facilis consectetur. Tempora dolores culpa libero a natus fugit ea ratione reprehenderit, consequuntur, debitis corrupti
                asperiores.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg"
                        alt="Juan Gomez" />
                        <h5>Juan Gomez</h5> 
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati aspernatur deleniti, endis mollitia voluptas est accusantium veritatis quidem, autem architecto commodi cumque, suscipit nobis molestias! Voluptatibus esse quibusdam sunt architecto.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}