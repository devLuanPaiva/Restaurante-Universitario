import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'

const OpcoesCadastro = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <h1>Como deseja se cadastrar?</h1>
                <section className="opcoesDuplas">
                    <button className='botaoOpcoes'>
                        <Link to={'/cadFuncionario'}>Funcionário</Link>
                    </button>
                    <button className='botaoOpcoes'>
                        <Link to={'/cadAluno'}>Aluno</Link>
                    </button>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default OpcoesCadastro
