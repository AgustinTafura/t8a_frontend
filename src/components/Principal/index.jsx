import Brands from '../Brands';
import Form from '../Form';
import PersonalCard from '../PersonalCard';
import './style.scss';


const Principal = () => {
    return (
        <main >
            <div className='container'>
                <div className='row'>
                    <section className='left'>
                        <Brands/>
                        <div className='text-content'>
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

                        <div className='card-content'>
                            <PersonalCard name={"José Perez"} jobTitle={"Presidente"}/>
                            <PersonalCard name={"José Perez"} jobTitle={"Customer Service Senior Manager"}/>
                            <PersonalCard name={"José Perez"} jobTitle={"Senior Customer Success Consultant"}/>
                            <PersonalCard name={"José Perez"} jobTitle={"Gerente de Consultoría de Soluciones"}/>
                        </div>

                        <div className='text-content'>
                            <p>
                                Participa e inspírate para innovar y mejorar la interacción entre clientes y marcas con historias de éxito de empresas del ámbito financiero en América Latina.
                            </p>
                            <p>
                                ¡Te esperamos!
                            </p>
                        </div>
                        <Brands/>
                    </section>

                    <section className='rigth'>
                        <Form/>
                    </section>

                </div>
            </div>
        </main>
    )
}

export default Principal