import {useState} from 'react';
import './App.css';

function App() {
  const [valor, setValor] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarResultados = async () => {
    const API_KEY = 'g4RvtVhDz5_jZwyc8L6LNCKiMNdSydU_LdWB4SKvKjo'
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${valor}&per_page=20`;

    const response = await fetch(URL);
    const data = await response.json();
    setResultados(data.results)
    console.log(data);
  }

  return (
    <div className="App">
      <div className='search_box'>
         <input className='search_box--input' placeholder='buscar' onChange={e => setValor(e.target.value)}/>
         <button onClick={() => buscarResultados()} className='search_box--btn'>buscar</button>
      </div>

      <div className='main__content'>
        <div className='main__content--grid'>
          {
            resultados.map((elementos, indice) => {
              return(
                <img alt="asd" key={indice} src={elementos.urls.regular}/>
              )
            })
          }
          </div>
      </div>
    </div>
  );
}

export default App;
