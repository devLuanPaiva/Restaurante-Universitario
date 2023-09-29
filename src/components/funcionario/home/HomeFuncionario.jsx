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
                        <Link to={'/HomeFuncionario/VisualizarFeedbacks'} className="buttons">
                            Visualizar Feedbacks
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default HomeFuncionario
