import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Janta = () => {
    const [cardapioJantar, setCardapioJantar] = useState([])

    useEffect(() => {
        pegarValores()
    }, [])
    const pegarValores = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/cardapio_jantar`, {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });

            if (response.status === 200) {
                const jantarData = response.data;
                setCardapioJantar(jantarData);

            }
        } catch (error) {
            console.error('Erro ao pegar valores:', error);
        }
    };
    return (
        <React.Fragment>
            <section className='CardJantar'>
                <table  className='padraoTabelas'>
                    <caption>Jantar</caption>
                    <thead>
                        <tr>
                            <th id='pontaEsquerda' className='primeiraColuna'>MENU</th>
                            <th>SEG</th>
                            <th>TER</th>
                            <th>QUA</th>
                            <th>QUI</th>
                            <th id='pontaDireita'>SEX</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className='primeiraColuna'>Prato Base</td>
                            {cardapioJantar.map((item) => (
                                <td key={item.id}>{item.prato_base}</td>

                            ))}
                        </tr>
                        <tr >
                            <td className='primeiraColuna'>Salada</td>
                            {cardapioJantar.map((item) => (
                                <td key={item.id}>{item.salada}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Proteína</td>
                            {cardapioJantar.map((item) => (
                                <td key={item.id}>{item.proteina_1}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Opção Vegetariana</td>
                            {cardapioJantar.map((item) => (
                                <td key={item.id}>{item.opcao_vegetariana}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Acompanhamento 1</td>
                            {cardapioJantar.map((item) => (
                                <td key={item.id}>{item.acompanhamento1}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Acompannhamento 2</td>
                            {cardapioJantar.map((item) => (
                                <td key={item.id}>{item.acompanhamento2}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Suco</td>
                            {cardapioJantar.map((item) => (
                                <td key={item.id}>{item.suco}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Sobremesa</td>
                            {cardapioJantar.map((item) => (
                                <td key={item.id}>{item.sobremesa}</td>

                            ))}
                        </tr>
                    </tbody>
                </table>
            </section>
        </React.Fragment>
    )
}

export default Janta
