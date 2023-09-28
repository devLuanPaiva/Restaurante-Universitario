import React from 'react';
import './FormCardapio.css'
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';

const FormCardapio = () => {

  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>O que deseja cadastrar?</h1>
        
          <section className="opcoesDuplas">
            <Link to={'/HomeFuncionario/CadastrarCardapio/Almoco'}>Almoço</Link>
            <Link to={'/HomeFuncionario/CadastrarCardapio/Janta'}>Janta</Link>
          </section>
        
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default FormCardapio;
