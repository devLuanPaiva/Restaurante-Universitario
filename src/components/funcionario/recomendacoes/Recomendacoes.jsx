import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import axios from 'axios'
import './Recomendacoes.css'
const Recomendacoes = () => {
    const [sugestoes, setSugestoes] = useState([])

    useEffect(() => {
        pegarValores()
    }, [])
    const pegarValores = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/sugestoes`)
            if (response.status === 200) {
                const sugestoesData = response.data
                setSugestoes(sugestoesData)
            }
        } catch (error) {
            console.error('Erro ao pegar valores:', error);
        }
    }
    return (
        <React.Fragment>
            <Header titulo={`Sugestões de Refeição`} link={'/homeFuncionario'} />
            <main className='sugestoes'>
                <section className="listSugestoes">
                    {sugestoes.length > 0 ? (
                        <>
                            {sugestoes.map((item) => (
                                <div key={item.id} className="sugestao">
                                    <h3>Anônimo</h3>
                                    <p>
                                        {item.novoPrato}
                                    </p>
                                </div>
                            ))}

                        </>
                    ) : (
                        <>
                            <p>Não existe nenhuma sugestão cadastrada até o momento!</p>
                        </>
                    )}
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Recomendacoes
