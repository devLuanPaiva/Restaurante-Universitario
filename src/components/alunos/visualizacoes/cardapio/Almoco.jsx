import React, { useEffect, useState } from 'react';

import axios from 'axios';

const Almoco = () => {
    const [cardapioAlmoco, setCardapioAlmoco] = useState([])

    useEffect(() => {
        pegarValores()
    }, [])
    const pegarValores = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/cardapio_almoco`, {
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });

            if (response.status === 200) {
                const almocoData = response.data;
                setCardapioAlmoco(almocoData);

            }
        } catch (error) {
            console.error('Erro ao pegar valores:', error);
        }
    };

    return (
        <React.Fragment>
            <section className='CardAlmoco'>
                <table className='padraoTabelas'>
                    <caption>Almoço</caption>
                    <thead>
                        <tr>
                            <th id='pontaEsquerda' className='primeiraColuna'>MENU</th>
                            <th>SEG</th>
                            <th>TER</th>
                            <th>QUA</th>
                            <th>QUI</th>
                            <th>SEX</th>
                            <th id='pontaDireita'>SAB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td className='primeiraColuna'>Salada</td>
                            {cardapioAlmoco.map(( item) => (
                                <td key={item.id}>{item.salada}</td>

                            ))}
                        </tr>
                        <tr >
                            <td className='primeiraColuna'>Prato Base</td>
                            {cardapioAlmoco.map(( item) => (
                                <td key={item.id}>{item.prato_base}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Proteína 1</td>
                            {cardapioAlmoco.map(( item) => (
                                <td key={item.id}>{item.proteina_1}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Proteína 2</td>
                            {cardapioAlmoco.map(( item) => (
                                <td key={item.id}>{item.proteina_2}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Opção Vegetariana</td>
                            {cardapioAlmoco.map(( item) => (
                                <td key={item.id}>{item.opcao_vegetariana}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Acompannhamento</td>
                            {cardapioAlmoco.map(( item) => (
                                <td key={item.id}>{item.acompanhamento}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Suco</td>
                            {cardapioAlmoco.map(( item) => (
                                <td key={item.id}>{item.suco}</td>

                            ))}
                        </tr>
                        <tr>
                            <td className='primeiraColuna'>Sobremesa</td>
                            {cardapioAlmoco.map(( item) => (
                                <td key={item.id}>{item.sobremesa}</td>

                            ))}
                        </tr>
                    </tbody>
                </table>
            </section>
        </React.Fragment>
    )
}

export default Almoco
