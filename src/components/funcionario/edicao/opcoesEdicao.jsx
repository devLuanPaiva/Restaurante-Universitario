import React from 'react'

import { Link } from 'react-router-dom'

const opcoesEdicao = () => {
  return (
    <React.Fragment>
      <main>
        <h1>O que deseja editar?</h1>
        <section className="opcoesDuplas">
            <Link to={'/HomeFuncionario/EditarCardapio/Almoco'}>Almoço</Link>
            <Link to={'/HomeFuncionario/EditarCardapio/Janta'}>Janta</Link>
          </section>
      </main>
    </React.Fragment>
  )
}

export default opcoesEdicao
