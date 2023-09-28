import React from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'

const CadAluno = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
                <section>
                    <h1>Cadastrar Aluno</h1>
                    <form>
                        <input type="text" className='informacoesAluno' placeholder='Nome' />
                        <input type="text" className='informacoesAluno' placeholder='Matrícula' />
                        <input type="text" className='informacoesAluno' placeholder='Email' />
                        <input type="text" className='informacoesAluno' placeholder='Senha' />
                        <input type="text" className='informacoesAluno' placeholder='Confirmar Senha' />
                    </form>
                    <div className="opcoesFinais">
                        <button>Cancelar</button>
                        <button>Cadastrar</button>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default CadAluno
