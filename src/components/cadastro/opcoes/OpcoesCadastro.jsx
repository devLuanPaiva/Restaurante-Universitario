import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import '../CadastroUsuarios.css'

const OpcoesCadastro = () => {
    return (
        <React.Fragment>
            <Header />
            <main className='mainOpcoesDuplas'> 
                <h1>Como deseja se cadastrar?</h1>
                <section className="opcoesDuplas">
                    
                        <Link className='buttons' to={'/cadFuncionario'}>Funcionário</Link>
                    
                        <Link className='buttons' to={'/cadAluno'}>Aluno</Link>
                   
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default OpcoesCadastro
