import React from 'react'
import './../Styles/Profile.css'
export default function Info() {
  return (
    <div class="container">
    <div class="main-body">
    
          
          
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>User</h4>
                      <p class=" mb-1">$Carrera Ing Civil Informatica</p>
                      <p class="text-muted font-size-sm">Rut</p>
                      <button class="btn btn-primary">Go Educa</button>
                      <button class="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Educa</h6>
                    <span class="mb-1">https://User.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary">User</span>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 className="mb-0">Nombre Completo</h6>
                    </div>
                    <div class="textcard">
                      User Name
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div class="textcard">
                      username@alu.uct.cl
                    </div>
                  </div>
                  <hr/>
                  
                  
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 className="mb-0">Telefono</h6>
                    </div>
                    <div class="textcard">
                      (+569) 00000000
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 className="mb-0">Direccion</h6>
                    </div>
                    <div class="textcard">
                    Rudecindo Ortega 2950, Temuco, Araucanía
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Editar</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Avance Ramos</i>Project Status</h6>
                      <small>Desarrollo Web</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "80%" ,ariavaluenow:"80", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                      <small>Programacion II</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "72%" ,ariavaluenow:"72", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                      <small>Mantencion</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "89%" ,ariavaluenow:"89", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                      <small>Taller de Integracion I</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "55%" ,ariavaluenow:"55", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                      <small>Electivo</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "66%" ,ariavaluenow:"66", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Asistencia Ramos</i>Project Status</h6>
                      <small>Desarrollo Web</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "80%" ,ariavaluenow:"80", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                      <small>Programacion II</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "72%" ,ariavaluenow:"72", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                      <small>Mantencion</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "89%" ,ariavaluenow:"89", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                      <small>Taller de Integracion I</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "55%" ,ariavaluenow:"55", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                      <small>Electivo</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "66 %" ,ariavaluenow:"4", ariavaluemin:"0", ariavaluemax:"100"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
  
      
    )
}