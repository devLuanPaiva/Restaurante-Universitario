import React, { useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import axios from 'axios';
import './NovoPrato.css'

const NovoPrato = () => {
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        if (e.target.value.length <= 500) {
            setText(e.target.value);
        }
    };
    let remainingCharacters = 500 - text.length;
    const cadastrarSugestao = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/sugestoes', {
                novoPrato: text
            });

            if (response.status === 201) {
                setText('');

            }
        } catch (error) {
            console.error('Error while posting evaluation:', error);
            
        }
    };
    return (
        <React.Fragment>
            <Header titulo={"Sugerir Refeição"} link={'/homeAluno'} />
            <main className="sugerirComida">
                <section className='formSugestao'>
                    <h2>Deixe sua Sugestão</h2>
                    
                    <div className="caixaTexto">
                        <div style={{ position: 'relative' }}>
                            <textarea
                                value={text}
                                onChange={handleInputChange}
                                placeholder="Digite no máximo 500 caracteres..."
                                rows={4}
                                cols={50}
                                style={{ width: '100%', height: '', resize: 'none', textIndent: '5px' }}
                            />
                            <p style={{ position: 'absolute', bottom: '5px', right: '5px', color: 'gray' }}>
                                {remainingCharacters}
                            </p>
                        </div>
                    </div>
                    <button className='buttons btn' onClick={cadastrarSugestao}>Sugerir</button>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default NovoPrato
