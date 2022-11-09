export const otherAttributes = [
  { title: 'Email', value: 'Email', type: 'paragraph' },
 
  { title: 'Carrera', value: 'Carrera', type: 'paragraph' },
];

const contactList = JSON.parse(
  `[{
    "id": 22143,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",

    "name": "Pedro Sanchez",
    "Email": "User@uct.cl",

    "Carrera": "$Carrera"
  }, {
    "id": 17385,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",

    "name": "Pedro Sanchez",
    "Email": "User@uct.cl",


    "Carrera": "$Carrera"
  }, {
    "id": 85838,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",

    "name": "Julio Rojas",
    "Email": "User@uct.cl",

    "Carrera": "$Carrera"
  }, {
    "id": 2791,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",

    "name": "Eliott Jamil",
    "Email": "User@uct.cl",

 
    "Carrera": "$Carrera"  
  }, {
    "id": 67493,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",
  
    "name": "Eliott Jamil",
    "Email": "User@uct.cl",
  
    "Carrera": "$Carrera" 
  }, {
    "id": 75593,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",

    "name": "Julio Rojas",
    "Email": "User@uct.cl",

  
    "Carrera": "$Carrera" 
  }, {
    "id": 90096,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",

    "name": "Marcos Levano",
    "Email": "User@uct.cl",


    "Carrera": "$Carrera" 
  }, {
    "id": 15783,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",

    "name": "Marcos Levano",
    "Email": "User@uct.cl",

    "Carrera": "$Carrera" 
  }, {
    "id": 42122,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",

    "name": "Pedro Sanchez",
    "Email": "User@uct.cl",

 
    "Carrera": "$Carrera" 
  }, {
    "id": 5869,
    "avatar": "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80",

    "name": "Pedro Sanchez ",
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
