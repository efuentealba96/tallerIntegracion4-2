import React, { useState } from "react";




const SearchBox = () => {
    const [valor, setValor] = useState('');
    const [resultados, setResultados] = useState([])


    const buscarResultados = async () => {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=20`;

        const response = await fetch(URL);
        const data = await response.json();
        setResultados(data.results);
        console.log(data);
    }



    return (
        <>
            <div className="search_box">
                <input className="search_box--input" placeholder="Buscar imagenes" onChange={e => setValor(e.target.value)} />
                <button onClick={() => buscarResultados()} className="search_box--btn">Buscar</button>
            </div>
            <div className="main_content">
                <div className="main_content--grid">
                    {
                        resultados.map((elemento, indice) => {
                            return (
                                <img key={indice} src={elemento.urls.regular} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SearchBox