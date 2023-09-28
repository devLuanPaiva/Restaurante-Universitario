import React, { useState } from 'react';
import './FormCardapio.css'
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

const FormAlmoco = () => {
  const [cardapio, setCardapio] = useState({
    segunda: {
      pratoBase: '',
      acompanhamento: '',
      proteina1: '',
      proteina2: '',
      opcaoVegetariana: '',
      salada: '',
      suco: '',
      sobremesa: '',
    },
    terca: {
      pratoBase: '',
      acompanhamento: '',
      proteina1: '',
      proteina2: '',
      opcaoVegetariana: '',
      salada: '',
      suco: '',
      sobremesa: '',
    },
    quarta: {
      pratoBase: '',
      acompanhamento: '',
      proteina1: '',
      proteina2: '',
      opcaoVegetariana: '',
      salada: '',
      suco: '',
      sobremesa: '',
    },
    quinta: {
      pratoBase: '',
      acompanhamento: '',
      proteina1: '',
      proteina2: '',
      opcaoVegetariana: '',
      salada: '',
      suco: '',
      sobremesa: '',
    },
    sexta: {
      pratoBase: '',
      acompanhamento: '',
      proteina1: '',
      proteina2: '',
      opcaoVegetariana: '',
      salada: '',
      suco: '',
      sobremesa: '',
    },
  });

  const handleChange = (day, field, value) => {
    setCardapio(prevCardapio => ({
      ...prevCardapio,
      [day]: {
        ...prevCardapio[day],
        [field]: value,
      },
    }));
  };
  const submitMenu = () => {
    console.log(cardapio)
  }
  return (
    <React.Fragment>
      <Header/>
      <main>
          <section>
            <h1>Montar Cardápio do Almoço</h1>
            {Object.keys(cardapio).map(day => (
              <div key={day}>
                <h2>{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
                <div>
                  <label>Prato Base:</label>
                  <input
                    type="text"
                    value={cardapio[day].pratoBase}
                    onChange={e => handleChange(day, 'pratoBase', e.target.value)}
                  />
                </div>
                <div>
                  <label >Acompanhamento:</label>
                  <input
                    type="text"
                    value={cardapio[day].acompanhamento}
                    onchange={e => handleChange(day, 'acompanhamento', e.target.value)}
                  />
                </div>
                <div>
                  <label >Proteina 1:</label>
                  <input
                    type="text"
                    value={cardapio[day].proteina1}
                    onchange={e => handleChange(day, 'proteina1', e.target.value)}
                  />
                </div>
                <div>
                  <label >Proteina 2:</label>
                  <input
                    type="text"
                    value={cardapio[day].proteina2}
                    onchange={e => handleChange(day, 'proteina2', e.target.value)}
                  />
                </div>
                <div>
                  <label >Opção Vegetariana:</label>
                  <input
                    type="text"
                    value={cardapio[day].opcaoVegetariana}
                    onchange={e => handleChange(day, 'opcaoVegetariana', e.target.value)}
                  />
                </div>
                <div>
                  <label >Salada:</label>
                  <input
                    type="text"
                    value={cardapio[day].salada}
                    onchange={e => handleChange(day, 'salada', e.target.value)}
                  />
                </div>
                <div>
                  <label >Sobremesa:</label>
                  <input
                    type="text"
                    value={cardapio[day].sobremesa}
                    onchange={e => handleChange(day, 'sobremesa', e.target.value)}
                  />
                </div>
                <div>
                  <label >Suco:</label>
                  <input
                    type="text"
                    value={cardapio[day].suco}
                    onchange={e => handleChange(day, 'suco', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </section>
          <div>
            <button onClick={submitMenu}>Cadastrar</button>
          </div>
      </main>
      <Footer/>
    </React.Fragment>
  );
};

export default FormAlmoco;
