import React from 'react'
import Header from '../../../header/Header'
import Footer from '../../../footer/Footer'
import Almoco from './Almoco'
import Janta from './Janta'
import './cardapio.css'

const ViewCardapio = () => {
    return (
        <React.Fragment>
            <Header titulo={"Cardápio da Semana"} link={'/homeAluno'} />
            <main className='viewCardapio'>
                <Almoco/>
                <Janta/>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default ViewCardapio
