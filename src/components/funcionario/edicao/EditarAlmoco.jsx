import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Edicao.css'

const EditarAlmoco = () => {
  const [pratoBase, setPratoBase] = useState('')
  const [acompanhamento, setAcompanhamento] = useState('')
  const [proteina1, setProteina1] = useState('')
  const [proteina2, setProteina2] = useState('')
  const [vegeitariana, setVegeitariana] = useState('')
  const [salada, setSalada] = useState('')
  const [sobremesa, setSobremesa] = useState('')
  const [suco, setSuco] = useState('')
  const { dia } = useParams()

  const pegarValores = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cardapio_almoco/${dia}`);
      if (response.status === 200) {
        const almocoData = response.data; // Use response.data para obter os dados
        setAcompanhamento(almocoData.acompanhamento);
        setPratoBase(almocoData.prato_base);
        setProteina1(almocoData.proteina_1);
        setProteina2(almocoData.proteina_2);
        setSalada(almocoData.salada);
        setSobremesa(almocoData.sobremesa);
        setVegeitariana(almocoData.opcao_vegetariana);
        setSuco(almocoData.suco);
      }
    } catch (error) {
      console.error('Erro ao pegar valores:', error);
    }
  }, [dia]);
  
  useEffect(() => {
    pegarValores()
  }, [pegarValores])

  const submitMenu = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.patch(`http://localhost:5000/cardapio_almoco/${dia}`, {
        prato_base: pratoBase,
        acompanhamento: acompanhamento,
        proteina_1: proteina1,
        proteina_2: proteina2,
        opcao_vegetariana: vegeitariana,
        salada: salada,
        suco: suco,
        sobremesa: sobremesa
      })
      if (response.status === 200) {
        setAcompanhamento('')
        setPratoBase('')
        setProteina1('')
        setProteina2('')
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
    <Header titulo={"Cardápio do Almoço"} link={'/homeFuncionario'} />
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
            placeholder='Acompanhamento'
            type="text"
            value={acompanhamento}
            onChange={e => setAcompanhamento(e.target.value)}
          />
          <input
            placeholder='Protetina 1'
            type="text"
            value={proteina1}
            onChange={e => setProteina1(e.target.value)}
          />
          <input
            placeholder='Proteina 2'
            type="text"
            value={proteina2}
            onChange={e => setProteina2(e.target.value)}
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
        <button id='cancel'>Cancelar</button>
          <button id='cad'  onClick={submitMenu}>Cadastrar</button>
        </div>
      </section>
    </main>
    <Footer />
  </React.Fragment>
  )
}

export default EditarAlmoco
