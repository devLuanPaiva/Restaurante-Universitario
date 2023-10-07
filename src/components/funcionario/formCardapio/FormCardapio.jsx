import React from 'react';
import './FormCardapio.css'
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';

const FormCardapio = () => {

  return (
    <React.Fragment>
      <Header />
      <main className='mainOpcoesDuplas'>
        <h1>O que deseja cadastrar?</h1>

        <section className="opcoesDuplas">
          <Link className='buttons' to={'/HomeFuncionario/CadastrarCardapio/Almoco'}>Almoço</Link>
          <Link className='buttons' to={'/HomeFuncionario/CadastrarCardapio/Janta'}>Janta</Link>
        </section>

      </main>
      <Footer />
    </React.Fragment>
  );
};

export default FormCardapio;
