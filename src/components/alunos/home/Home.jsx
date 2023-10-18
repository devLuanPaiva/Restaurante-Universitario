import React from 'react'
import './Home.css'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
            <Header titulo = {'Menu do Aluno'} link={'/login'} />
            <main>
            <div className="container">
                
                    <section className='opcoes'>
                        <div>
                            <Link to={'/Homealuno/VisualizarCardapio'} className="buttons">
                                Visualizar Cardápio
                            </Link>
                            <Link to={'/Homealuno/VisualizarFeedbacks/Aluno'} className="buttons">
                                Visualizar Feedbacks
                            </Link>
                        </div>
                        <div>
                            <Link to={'/Homealuno/SugerirPrato'} className="buttons">
                                Sugerir Refeição
                            </Link>
                            <Link to={'/Homealuno/RealizarFeedback'} className="buttons">Realizar Feedback</Link>
                        </div>
                    </section>
            </div>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Home