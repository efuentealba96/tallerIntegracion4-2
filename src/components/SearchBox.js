import React, { useState } from "react";




const SearchBox = () => {
    const [valor, setValor] = useState('');

const buscarResultados = async () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}`;

    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
}



    return (
        <div className="search_box">
            <input className="search_box--input" placeholder="Buscar imagenes" onChange={e => setValor(e.target.value)}/>
            <button onClick={() => buscarResultados()} className="search_box--btn">Buscar</button>
        </div>
    )
}

export default SearchBox