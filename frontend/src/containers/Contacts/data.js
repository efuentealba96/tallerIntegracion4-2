export const otherAttributes = [
  { title: 'Email', value: 'Email', type: 'paragraph' },

  { title: 'Carrera', value: 'Carrera', type: 'paragraph' },
];

const contactList = JSON.parse(
  `[{
    "id": 22143,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",

    "name": "Luis Caro",
    "Email": "User@uct.cl",

    "Carrera": "$Carrera"
  }, {
    "id": 17385,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",

    "name": "Alejandro Mellado",
    "Email": "User@uct.cl",


    "Carrera": "$Carrera"
  }, {
    "id": 85838,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",

    "name": "Julio Rojas",
    "Email": "User@uct.cl",

    "Carrera": "$Carrera"
  }, {
    "id": 2791,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",

    "name": "Eliott Jamil",
    "Email": "User@uct.cl",

 
    "Carrera": "$Carrera"  
  }, {
    "id": 67493,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",
  
    "name": "Carla Arias (Secretaria Carrera)",
    "Email": "User@uct.cl",
  
    "Carrera": "$Carrera" 
  }, {
    "id": 75593,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",

    "name": "Ignacio Lincolao",
    "Email": "User@uct.cl",

  
    "Carrera": "$Carrera" 
  }, {
    "id": 90096,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",

    "name": "Marcos Levano",
    "Email": "User@uct.cl",


    "Carrera": "$Carrera" 
  }, {
    "id": 15783,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",

    "name": "Patricia Riquelme Mendoza (Secretaia Decanato)",
    "Email": "User@uct.cl",

    "Carrera": "$Carrera" 
  }, {
    "id": 42122,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",

    "name": "Pedro Sanchez",
    "Email": "User@uct.cl",

 
    "Carrera": "$Carrera" 
  }, {
    "id": 5869,
    "avatar": "https://5368fbd5ff.cbaul-cdnwnd.com/535f8b78cf70da6f094b00fb11464aeb/200000014-7ef0d7fec1/uct.png",

    "name": "Carlos Oñate (Coordinador Vinculo)",
    "Email": "User@uct.cl",


    "Carrera": "$Carrera" 
  }]`
);

export default class fakeData {
  constructor(size = 10) {
    this.size = size;
    this.datas = [];
  }
  dataModel(index) {
    return contactList[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas
      .slice()
      .sort(
        (contact1, contact2) =>
          `${contact1.firstName}${contact1.LastName}`.toUpperCase() >
          `${contact2.firstName}${contact2.LastName}`.toUpperCase()
      );
  }

  getSize() {
    return this.size;
  }
}
