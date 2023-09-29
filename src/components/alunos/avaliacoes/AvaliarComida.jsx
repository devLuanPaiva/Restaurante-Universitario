import React, { useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { AiFillStar } from "react-icons/ai";
import './Avaliar.css'

const AvaliarComida = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    console.log(rating)
    return (
        <React.Fragment>
            <Header />
            <main className="avaliarComida">
                <section>
                    <h2>Escolha uma refeição para avaliar</h2>
                    <div className="stars">
                        {[...Array(5)].map((star, i) => {
                            const ratingValue = i + 1
                            return (
                                <label >
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
                    <p>{rating}</p>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default AvaliarComida
