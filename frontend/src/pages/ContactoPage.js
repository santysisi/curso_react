import React from "react";

export default function ContactoPage() {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                    <label for="nombre">Nombre</label> <input type="text" name="" />
                    </p>
                    <p>
                    <label for="email">Email</label>
                    </p>
                    <p>
                    <input type="text" name="" />
                    <label for="telefono">Telefono</label> <input type="text" name="" />
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                    </p>
                    <p>
                    </p>
                    <p class="acciones"><input type="submit"
                    value="Enviar" />
                    </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicación</h2>
                <p>También puede contactarse con nosotros usando
                los siguintes medios</p>
                <ul>
                    <li>Teléfono: 123123123123</li>
                    <li>Email: contacto@blog.com.ar</li>
                    <li>Facebook: blogsantysisi</li>
                    <li>Twitter: blogsantysisi</li>
                </ul>
            </div>
        </main>
    );
}