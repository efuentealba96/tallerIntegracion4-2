import React, { useState } from "react";


const SearchBox = () => {
    const [valor, setValor] = useState('');
    return (
        <div className="search_box">
            <input className="search_box--input" placeholder="Buscar imagenes" onChange={e => setValor(e.target.value)}/>
            <button className="search_box--btn">Buscar</button>
        </div>
    )
}

export default SearchBox