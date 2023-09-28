import React, { useState } from 'react'
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

const FormJanta = () => {
  const [cardapio, setCardapio] = useState({
    segunda: {
      pratoBase: '',
      acompanhamento: '',
      proteina: '',
      guarnicao: '',
      vegetariano: '',
      salada: '',
      suco: '',
      sobremesa: '',
    },
    terca: {
      pratoBase: '',
      acompanhamento: '',
      proteina: '',
      guarnicao: '',
      vegetariano: '',
      salada: '',
      suco: '',
      sobremesa: '',
    },
    quarta: {
      pratoBase: '',
      acompanhamento: '',
      proteina: '',
      guarnicao: '',
      vegetariano: '',
      salada: '',
      suco: '',
      sobremesa: '',
    },
    quinta: {
      pratoBase: '',
      acompanhamento: '',
      proteina: '',
      guarnicao: '',
      vegetariano: '',
      salada: '',
      suco: '',
      sobremesa: '',
    },
    sexta: {
      pratoBase: '',
      acompanhamento: '',
      proteina: '',
      guarnicao: '',
      vegetariano: '',
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
      <Header />
      <main>
        <section>
          <h1>Montar Cardápio da Janta</h1>
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
                <label >Proteina:</label>
                <input
                  type="text"
                  value={cardapio[day].proteina}
                  onchange={e => handleChange(day, 'proteina', e.target.value)}
                />
              </div>
              <div>
                <label >guarnicao:</label>
                <input
                  type="text"
                  value={cardapio[day].guarnicao}
                  onchange={e => handleChange(day, 'guarnicao', e.target.value)}
                />
              </div>
              <div>
                <label >Vegetariano:</label>
                <input
                  type="text"
                  value={cardapio[day].vegetariano}
                  onchange={e => handleChange(day, 'vegetariano', e.target.value)}
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
      <Footer />
    </React.Fragment>
  )
}

export default FormJanta
