import React from 'react'
import Header from '../../header/Header'
import './HomeFuncionario.css'
import { Link } from 'react-router-dom'
import Footer from '../../footer/Footer'

const HomeFuncionario = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
            <div className="container-funcionario">
                <h1>Menu do funcionário</h1>
                    <section className='opcoes'>
                
                        <div className='opcoes-itens'>
                            <Link to={'/HomeFuncionario/CadastrarCardapio'} className="buttons">
                                Cadastrar Cardápio
                            </Link>
                            <Link to={'/HomeFuncionario/EditarCardapio'} className="buttons">
                                Editar Cardápio
                            </Link>
                       
                            <Link to={'/HomeFuncionario/VisualizarSugestoes'} className="buttons">
                                Visualizar Sugestões
                            </Link>
                            <Link to={'/HomeFuncionario/VisualizarFeedbacks'} className="buttons">
                                Visualizar Feedbacks
                            </Link>
                        </div>
                    </section>
            </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default HomeFuncionario
