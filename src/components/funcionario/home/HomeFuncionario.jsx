import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import './HomeFuncionario.css'
import { Link } from 'react-router-dom'

const HomeFuncionario = () => {
    return (
        <React.Fragment>
            <Header titulo={'Menu do funcionário'} />
            <main>
            <div className="container-funcionario">

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
                            <Link to={'/HomeFuncionario/VisualizarFeedbacks/Funcionario'} className="buttons">
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
