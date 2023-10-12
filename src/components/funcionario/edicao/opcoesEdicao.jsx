import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import './Edicao.css'

const OpcoesEdicao = () => {
  return (
    <React.Fragment>
      <Header link={'/homeFuncionario'}/>
      <main className='escolhasDias'>
        <h1>O que deseja editar?</h1>
        <section className="opcoesDuplas">
            <Link className='buttons' to={'/HomeFuncionario/EditarCardapio/Almoco'}>Almoço</Link>
            <Link className='buttons' to={'/HomeFuncionario/EditarCardapio/Jantar'}>Janta</Link>
          </section>
      </main>
    <Footer/>
    </React.Fragment>
  )
}

export default OpcoesEdicao
