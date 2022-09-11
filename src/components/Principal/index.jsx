import Brands from '../Brands';
import './style.scss';


const Principal = () => {
    return (
        <main>
            <Brands/>
            <section>
                <div>
                    <p>
                        Te invitan este webinar, donde trataremos la temática de cómo humanizar 
                        la experiencia del cliente de Banca y Seguros en el nuevo entorno digital.
                    </p>
                    <p>
                        Además podremos conocer las estrategias que aplicó LOREM para generar una 
                        experiencia memorable para sus clientes, mientras se convertía en el gran 
                        Unicornio de LATAM.
                    </p>
                    <p>
                        Escucha de primera mano la voz de nuestros especialistas:
                    </p>
                </div>

                <div>
                    logos
                </div>

                <div>
                    <p>
                        Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.
                    </p>
                    <p>
                        ¡Te esperamos!
                    </p>
                </div>

            </section>
            <Brands/>
        </main>
    )
}

export default Principal