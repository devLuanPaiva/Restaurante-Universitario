import React, { useState } from 'react'
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import './FormCardapio.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const FormJanta = () => {
  const [pratoBase, setPratoBase] = useState('')
  const [acompanhamento1, setAcompanhamento1] = useState('')
  const [acompanhamento2, setAcompanhamento2] = useState('')
  const [proteina1, setProteina1] = useState('')
  const [vegeitariana, setVegeitariana] = useState('')
  const [salada, setSalada] = useState('')
  const [sobremesa, setSobremesa] = useState('')
  const [suco, setSuco] = useState('')
  const { dia } = useParams()

  const submitMenu = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.patch(`http://localhost:5000/cardapio_jantar/${dia}`, {
        prato_base: pratoBase,
        acompanhamento1: acompanhamento1,
        proteina_1: proteina1,
        acompanhamento2: acompanhamento2,
        opcao_vegetariana: vegeitariana,
        salada: salada,
        suco: suco,
        sobremesa: sobremesa
      })
      if (response.status === 200) {
        setAcompanhamento1('')
        setPratoBase('')
        setProteina1('')
        setAcompanhamento2('')
        setSalada('')
        setSobremesa('')
        setVegeitariana('')
        setSuco('')
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }

  }
  return (
    <React.Fragment>
      <Header titulo={'Cardápio  do jantar'} link={'/homeFuncionario'} />
      <main className='mainFormCardapio'>
        <section className='formCardapio'>
          <form>
            <input
              placeholder='Prato Base'
              type="text"
              value={pratoBase}
              onChange={e => setPratoBase(e.target.value)}
            />
            <input
              placeholder='Acompanhamento 1'
              type="text"
              value={acompanhamento1}
              onChange={e => setAcompanhamento1(e.target.value)}
            />
            <input
              placeholder='Acompanhamento 2'
              type="text"
              value={acompanhamento2}
              onChange={e => setAcompanhamento2(e.target.value)}
            />
            <input
              placeholder='Protetina 1'
              type="text"
              value={proteina1}
              onChange={e => setProteina1(e.target.value)}
            />
            <input
              placeholder='Opção Vegetariana'
              type="text"
              value={vegeitariana}
              onChange={e => setVegeitariana(e.target.value)}
            />
            <input
              placeholder='Salada'
              type="text"
              value={salada}
              onChange={e => setSalada(e.target.value)}
            />
            <input
              placeholder='Sobremesa'
              type="text"
              value={sobremesa}
              onChange={e => setSobremesa(e.target.value)}
            />
            <input
              placeholder='Suco'
              type="text"
              value={suco}
              onChange={e => setSuco(e.target.value)}
            />
          </form>

          <div className='opcoesFinais'>
            <Link to={'/homeFuncionario'} id='cancelar'>Cancelar</Link>
            <button id='cadastrar' onClick={submitMenu}>Cadastrar</button>
          </div>
        </section>

      </main>
      <Footer />
    </React.Fragment>
  )
}

export default FormJanta
