import React, { useEffect, useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import Header from '../../../header/Header'
import Footer from '../../../footer/Footer'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './VisualizarFeedbacks.css'

const VisualizarFeedbacks = () => {
    const [avaliacoes, setAvaliacoes] = useState([])
    const { tipo } = useParams()

    useEffect(() => {
        pegarValores()
    }, [])
    const pegarValores = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/avaliacoes`)
            if (response.status === 200) {
                const avaliacoesData = response.data
                setAvaliacoes(avaliacoesData)
            }
        } catch (error) {
            console.error('Erro ao pegar valores:', error);
        }
    }
    return (
        <React.Fragment>
            <Header titulo={'Feedbacks dos Alunos'} link={`/home${tipo}`} />
            <main className='feedbacks'>
                <section className="listFeedbacks">
                    {avaliacoes.length > 0 ? (
                        <>
                            {avaliacoes.map((item) => (
                                <div key={item.id} className="avaliacoes">
                                    <h3>Anônimo</h3>
                                    <div className="stars">
                                        {[0, 1, 2, 3, 4].map((i) => (
                                            <AiFillStar
                                                key={i}
                                                color={i < item.estrelas ? "#ffc107" : "#b9b9ba"}
                                                className="star"
                                                size={30}
                                            />
                                        ))}
                                    </div>
                                    <p>
                                        O {item.tipo === "1" ? 'almoço ' : 'jantar '}
                                        d{item.dia === "2" ? 'a segunda'
                                            : item.dia === "3" ? 'a terça'
                                                : item.dia === "4" ? 'a quarta'
                                                    : item.dia === "5" ? 'a quinta'
                                                        : item.dia === "6" ? 'a sexta'
                                                            : 'o sábado'} estava {item.estrelas === 0 ? 'horrível'
                                                                : item.estrelas === 1 ? 'péssimo'
                                                                    : item.estrelas === 2 ? 'ruim'
                                                                        : item.estrelas === 3 ? 'razoável'
                                                                            : item.estrelas === 4 ? 'ótimo'
                                                                                : 'excelente'} pois, {item.comentario}
                                    </p>
                                </div>
                            ))}

                        </>
                    ) : (
                        <>
                            <p>Não existe nenhuma feedback cadastrado até o momento!</p>
                        </>
                    )}
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default VisualizarFeedbacks
