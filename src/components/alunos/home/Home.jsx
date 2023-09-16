import React from 'react'
import './Home.css'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <main>
                <section className='opcoes'>
                    <div>
                        <button className="buttonHome">Visualizar Cardápio</button>
                        <button className="buttonHome">Visualizar Feedbacks</button>
                    </div>
                    <div>
                        <button className="buttonHome">Sugerir novo prato</button>
                        <button className="buttonHome">Realizar Feedback</button>
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default Home
