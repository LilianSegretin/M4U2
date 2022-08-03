import '../styles/components/pages/ContactoPage.css';


const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <imput type="text" name=""/>
                    </p>
                    <p>
                        <label form="email">Email</label>
                        <imput type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono">telefono</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones">
                    <input type="submit"
                     value="Enviar" />
                     </p>
                </form>
            </div>
            <div class="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>telefono: 99999999</li>
                    <li>Email: contacto@transportex.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skype:</li>
                </ul>
            </div>
        </main>
    );
}
export default ContactoPage;