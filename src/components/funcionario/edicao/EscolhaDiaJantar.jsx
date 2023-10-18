import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
// import './Edicao.css'

const EscolhaDiaJantar = () => {
    return (
        <React.Fragment>
            <Header titulo = {'Escolha o dia da semana'} link={'/homeFuncionario'} />
            <main className='escolhasDias'>
                
                <section className='opcoesDuplas'>
                    <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Jantar/${2}`}>Segunda</Link>
                    <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Jantar/${3}`}>Terca</Link>
                    <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Jantar/${4}`}>Quarta</Link>
                    <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Jantar/${5}`}>Quinta</Link>
                    <Link className='buttons' to={`/HomeFuncionario/EditarCardapio/Jantar/${6}`}>Sexta</Link>

                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default EscolhaDiaJantar
