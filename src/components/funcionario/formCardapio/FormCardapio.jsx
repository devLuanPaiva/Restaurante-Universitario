import React from 'react';
import './FormCardapio.css'
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';

const FormCardapio = () => {

  return (
    <React.Fragment>
      <Header titulo={'O que desaja cadastra?'} link={'/homeFuncionario'}/>
      <main className='mainOpcoesDuplas'>


        <section className="opcoesDuplas">
          <Link className='buttons' to={'/HomeFuncionario/CadastrarCardapio/Almoco'}>Almoço</Link>
          <Link className='buttons' to={'/HomeFuncionario/CadastrarCardapio/Jantar'}>Jantar</Link>
        </section>

      </main>
      <Footer />
    </React.Fragment>
  );
};

export default FormCardapio;
