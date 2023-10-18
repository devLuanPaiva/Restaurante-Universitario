import React, { useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { AiFillStar } from "react-icons/ai";
import './Avaliar.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AvaliarComida = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    const { tipo, dia } = useParams()

    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        if (e.target.value.length <= 500) {
            setText(e.target.value);
        }
    };
    let remainingCharacters = 500 - text.length;

    const cadastrarAvaliacao = async (e) => {
        e.preventDefault();

        if (rating === 0) {
            
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/avaliacoes', {
                estrelas: rating,
                comentario: text,
                tipo: tipo,
                dia: dia,
            });

            if (response.status === 201) {
                setRating(0);
                setText('');
                setHover(0);
            }
        } catch (error) {
            console.error('Error while posting evaluation:', error);
            
        }
    };
    return (
        <React.Fragment>
            <Header titulo={"Avaliar Refeição"} link={'/homeAluno'} />
            <main className="avaliarComida">
                <section className='formAvaliacao'>
                    <h2>Deixe sua Avaliação</h2>
                    <div className="stars">
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1
                            return (
                                <label key={i}>
                                    <input
                                        type="radio"
                                        name='rating'
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}

                                    />
                                    <AiFillStar
                                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#b9b9ba"} className='star'
                                        size={50}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(null)} />
                                </label>
                            )
                        })}

                    </div>
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
                    <button className='buttons btn' onClick={cadastrarAvaliacao}>Avaliar</button>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default AvaliarComida