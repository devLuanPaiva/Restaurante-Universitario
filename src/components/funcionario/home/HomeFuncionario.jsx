import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import './HomeFuncionario.css'
import { Link } from 'react-router-dom'

const HomeFuncionario = () => {
    return (
        <React.Fragment>
            <Header titulo={'Menu do Funcionário'} link={'/login'} />
            <main>
                <div className="container">

                    <section className='opcoes'>

                        <div>
                            <Link to={'/HomeFuncionario/CadastrarCardapio'} className="buttons">
                                Cadastrar Cardápio
                            </Link>
                            <Link to={'/HomeFuncionario/EditarCardapio'} className="buttons">
                                Editar Cardápio
                            </Link>
                        </div>

                        <div>
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