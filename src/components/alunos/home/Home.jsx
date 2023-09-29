import React from 'react'
import './Home.css'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <section className='opcoes'>
                    <div>
                        <Link to={'/Homealuno/VisualizarCardapio'} className="buttons">
                            Visualizar Cardápio
                        </Link>
                        <Link to={'/Homealuno/VisualizarFeedbacks'} className="buttons">
                            Visualizar Feedbacks
                        </Link>
                    </div>
                    <div>
                        <Link to={'/Homealuno/SugerirPrato'} className="buttons">
                            Sugerir novo prato
                        </Link>
                        <Link to={'/Homealuno/RealizarFeedback'} className="buttons">Realizar Feedback</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Home
