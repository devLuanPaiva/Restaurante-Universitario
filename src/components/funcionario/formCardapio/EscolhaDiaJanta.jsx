import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import './FormCardapio.css'
const EscolhaDiaJanta = () => {
    return (
        <React.Fragment>
            <Header link={'/homeFuncionario'} />
            <main className='escolhasDias'>
                <h1>Escolha o dia da semana</h1>
                <section className='opcoesDuplas'>
                    <Link className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Jantar/${2}`}>Segunda</Link>
                    <Link className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Jantar/${3}`}>Terca</Link>
                    <Link className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Jantar/${4}`}>Quarta</Link>
                    <Link className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Jantar/${5}`}>Quinta</Link>
                    <Link className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Jantar/${6}`}>Sexta</Link>

                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default EscolhaDiaJanta
