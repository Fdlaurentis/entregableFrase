import phrase from '../quotes.json'
import React, { useState } from 'react';

const QuoteBox = () => {
    const random = Math.floor(Math.random() * phrase.length)
    const random2 = Math.floor(Math.random() * phrase.length)
    const [index, setIndex] = useState(random)
    const click = () => setIndex(random2)
    const r = () => Math.random() * 256 >> 0;
    const color = `rgb(${r()}, ${r()}, ${r()})`;
    document.body.style = `background:${color}`
    return (
        <div className='card' style={{ color: color }}>
            <div className="frase">
                <i className="comillas fa-solid fa-quote-left"></i>
                <p>{phrase[index].quote}</p>
            </div>
            <div className="autor">
                <h2>{phrase[index].author}</h2>
                <i className="btn fa-solid fa-circle-chevron-right" onClick={click}></i>
            </div>
        </div>
    );
};

export default QuoteBox;