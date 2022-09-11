import Principal from '../components/Principal';

const Home = () => {
  return (
    <>
      <header className="App-header">
        <div className='container'>
          <div>
            <tt className='tag'>
              WEBINAR
            </tt>
          </div>
          <h1>
            El reto de humanicar el CX financiero en 2021.
          </h1>
          <h2>
            <i>
              La experiencia de un Unicorniode latam
            </i>
          </h2>
          <h3>
            Miércoles 16 de diciembre | 17 hs (Horario de Quito)
          </h3>
        </div>
      </header>
      <Principal/>
    </>
  )
}

export default Home