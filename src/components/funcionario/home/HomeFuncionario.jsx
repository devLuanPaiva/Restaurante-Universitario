import React from 'react'
import Header from '../../header/Header'
import './HomeFuncionario.css'
import { Link } from 'react-router-dom'
import Footer from '../../footer/Footer'

const HomeFuncionario = () => {
    return (
        <React.Fragment>
            <Header/>
            <main>
                <section className='opcoes'>
                    <div>
                        <Link to={'/HomeFuncionario/CadastrarCardapio'} className="buttonHome">Cadastrar Cardápio</Link>
                        <Link className="buttonHome">Editar Cardápio</Link>
                    </div>
                    <div>
                        <Link className="buttonHome">Visualizar Sugestões</Link>
                        <Link className="buttonHome">Visualizar Feedbacks</Link>
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default HomeFuncionario
