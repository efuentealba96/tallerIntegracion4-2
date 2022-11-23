import React from 'react';
import DualListBox from 'react-dual-listbox';


const options = [
    { value: 'info-1158', label: 'INFO-1158/Teoria de Grafos/Sec2/SinProfesor' },
    { value: 'info-1148', label: 'INFO-1148/Teoria de la Computacion/Sec1/SinProfesor' },
    { value: 'info-1166', label: 'INFO-1166/Taller de Integracion III/Sec1/SinProfesor' },
    { value: 'info-1157', label: 'INFO-1157/Sistemas Inteligentes/Sec1/SinProfesor' },
    { value: 'info-1108', label: 'INFO-1108/Sistemas de la Computacion/Sec1/SinProfesor' },
    { value: 'info-1155', label: 'INFO-1155/Arquitectura de Hardware/Sec1/SinProfesor' },
    { value: 'mat-1189', label: 'MAT-1189/CAlculo Avanzado/Sec1/SinProfesor' },
  
    { value: 'ddo-1052', label: 'DDO-1052/Manifestaciones de la Espiritualidad/sec2/SinProfesor' },
    { value: 'ddo-1062', label: 'DDO-1062/Cine/sec1/SinProfesor' },
    { value: 'ddo-1072', label: 'DDO-1072/Teatro/sec1/SinProfesor' },
    { value: 'ddo-1082', label: 'DDO-1082/Futbol/sec1/SinProfesor' },
    { value: 'ddo-1092', label: 'DDO-1092/Senderismo/sec2/SinProfesor' },
    { value: 'ddo-1042', label: 'DDO-1042/Actualidad y tecnologias/sec2/SinProfesor' },

    { value: 'elac-1425', label: 'ELAC-1425/Matrimonio una propuesta de Vida Cristiana/sec2/SinProfesor'},
    { value: 'elac-1435', label: 'ELAC-1435/Teologia/sec2/SinProfesor'},
   
    { value: 'elte', label: 'ELTE-1440/Teologia de la migracion desde una perspectiva interdisciplinaria/sec1/SinProfesor' },

];

const planets = {
    INFO: { name: 'INFO', CURSO: ['info-1158','info-1148','info-1166','info-1157','info-1108','info-1155','mat-1189'] },
    DDO: { name: 'DDO', CURSO: ['ddo-1052','ddo-1062','ddo-1072','ddo-1082','ddo-1092','ddo-1042'] },
    ELAC: { name: 'ELAC', CURSO: ['elac-1435'] },
    ELTE: { name: 'ELTE', CURSO: ['elte'] },
};

class RestrictAvailableExample extends React.Component {
    state = {
        planet: 'INFO',
        selected: ['elac'],
    };

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onPlanetChange = this.onPlanetChange.bind(this);
    }

    onChange(selected) {
        this.setState({ selected });
    }

    onPlanetChange(event) {
        const planet = event.currentTarget.value;

        this.setState({ planet });
    }

    renderPlanets() {
        const { planet: selectedPlanet } = this.state;

        return Object.keys(planets).map((planet) => (
            <label key={planet} htmlFor={planet}>
                <input
                    checked={planet === selectedPlanet}
                    id={planet}
                    name="planets"
                    type="radio"
                    value={planet}
                    onChange={this.onPlanetChange}
                    style={{height:"200px;" , width:"200px"}}
                />
                {planets[planet].name}
            </label>
        ));
    }

    render() {
        const { selected, planet } = this.state;

        return (
            <div className="restrict-available-container"  >
                <div className="CURSO"   >
                    {this.renderPlanets()}
                </div>
                <DualListBox
                    available={planets[planet].CURSO}
                    options={options}
                    selected={selected}
                    onChange={this.onChange}
                    
                />
                
            </div>
            
        );
    }
}

export default RestrictAvailableExample;