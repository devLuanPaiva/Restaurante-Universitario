import React from 'react'
import './Avaliar.css'
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
const AvaliarTipo = () => {
    return (
        <React.Fragment>
            <Header titulo={'O que deseja avaliar?'} link={'/homeAluno'} />
            <main className='mainOpcoesDuplas'>

                <section className="opcoesDuplas">
                    <Link className='buttons' to={'/Homealuno/RealizarFeedback/Almoco'}>Almoço</Link>
                    <Link className='buttons' to={'/Homealuno/RealizarFeedback/Jantar'}>Jantar</Link>
                </section>

            </main>
            <Footer />
        </React.Fragment>
    )
}

export default AvaliarTipo
