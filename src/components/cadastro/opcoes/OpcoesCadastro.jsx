import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import './OpcoesCadastro.css'

const OpcoesCadastro = () => {
    return (
        <React.Fragment>
            <Header titulo = "Como deseja se cadastrar?" link={'/login'}/>
            <main className='mainOpcoesDuplas'> 
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
