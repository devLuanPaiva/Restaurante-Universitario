import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import './Avaliar.css'
const AvaliarDiaJantar = () => {
  return (
    <React.Fragment>
            <Header titulo={'Escolha o dia da senana'} link={'/homeAluno'} />
            <main className='escolhasDias'>
                
                <section className='opcoesDuplas'>
                    <Link className='buttons' to={`/Homealuno/RealizarFeedback/Jantar/${2}/${2}`}>Segunda</Link>
                    <Link className='buttons' to={`/Homealuno/RealizarFeedback/Jantar/${2}/${3}`}>Terca</Link>
                    <Link className='buttons' to={`/Homealuno/RealizarFeedback/Jantar/${2}/${4}`}>Quarta</Link>
                    <Link className='buttons' to={`/Homealuno/RealizarFeedback/Jantar/${2}/${5}`}>Quinta</Link>
                    <Link className='buttons' to={`/Homealuno/RealizarFeedback/Jantar/${2}/${6}`}>Sexta</Link>

                </section>
            </main>
            <Footer />
        </React.Fragment>
  )
}

export default AvaliarDiaJantar
