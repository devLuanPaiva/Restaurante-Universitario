import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import './Avaliar.css'

function AvaliarDia() {
    return (
        <React.Fragment>
            <Header titulo={'Escolha o dia da senana'} link={'/homeAluno'}/>
            <main className='escolhasDias'>
                <section className='opcoesDuplas'>
                    <Link  className='buttons' to={`/Homealuno/RealizarFeedback/Almoco/${1}/${2}`}>Segunda</Link>
                    <Link  className='buttons' to={`/Homealuno/RealizarFeedback/Almoco/${1}/${3}`}>Terca</Link>
                    <Link  className='buttons' to={`/Homealuno/RealizarFeedback/Almoco/${1}/${4}`}>Quarta</Link>
                    <Link  className='buttons' to={`/Homealuno/RealizarFeedback/Almoco/${1}/${5}`}>Quinta</Link>
                    <Link  className='buttons' to={`/Homealuno/RealizarFeedback/Almoco/${1}/${6}`}>Sexta</Link>
                    <Link  className='buttons' to={`/Homealuno/RealizarFeedback/Almoco/${1}/${7}`}>Sábado</Link>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default AvaliarDia