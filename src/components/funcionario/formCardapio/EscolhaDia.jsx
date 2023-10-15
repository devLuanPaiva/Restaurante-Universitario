import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import './FormCardapio.css'

const EscolhaDia = () => {
    return (
        <React.Fragment>
            <Header link={'/homeFuncionario'}/>
            <main className='escolhasDias'>
                <div className="escolhaDiasTitulo">
                    <h1>Escolha o dia da semana</h1>
                </div>
                <section className='opcoesDuplas'>
                    <div className="opcoesDuplasSemana">    
                        <Link  className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Almoco/${2}`}>Segunda</Link>
                        <Link  className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Almoco/${3}`}>Terca</Link>
                        <Link  className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Almoco/${4}`}>Quarta</Link>
                        <Link  className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Almoco/${5}`}>Quinta</Link>
                        <Link  className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Almoco/${6}`}>Sexta</Link>
                        <Link  className='buttons' to={`/HomeFuncionario/CadastrarCardapio/Almoco/${0}`}>Sábado</Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default EscolhaDia
