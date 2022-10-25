import React from 'react'
import './../Styles/Contactos.css';

export default function Contactos() {

    return (


        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-lg-6">
                    
                    <div className="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible" , animationDelay: "0.2s", animationname: "fadeInUp"}}>
                        <h3>Pagina <span> Contactos</span></h3>
                        <p>Aqui podras encontrar el directorio de tanto tus profesores , como asistentes de carrera y secretarias .</p>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style={{visibility: "visible", animationdelay: "0.2s" ,animationname: "fadeInUp"}}>
                        
                        <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                            
                            <div className="social-info"><a href="/"><i className="fa fa-envelope"></i></a><a href="/"><i className="fa-solid fa-user"></i></a><a href="/"><i className="fa fa-linkedin"></i></a></div>
                        </div>
                        
                        <div className="single_advisor_details_info">
                            <h6>Julio Rojas</h6>
                            <p className="designation">Director de carrera &amp; Informática</p>
                            <p className="designation">Algoritmos de la Optimizacion</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style={{visibility: "visible", animationdelay: "0.3s", animationname: "fadeInUp"}}>
                        
                        <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt=""/>
                            
                            <div className="social-info"><a href="/"><i className="fa fa-envelope"></i></a><a href="/"><i className="fa-solid fa-user"></i></a><a href="/"><i className="fa fa-linkedin"></i></a></div>
                        </div>
                        
                        <div className="single_advisor_details_info">
                            <h6>Gabriel venegas</h6>
                            <p className="designation">Profesor &amp; Informaticar</p>
                            <p className="designation">Bases de Datos </p>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.4s" style={{visibility: "visible", animationdelay: "0.4s", animationname: "fadeInUp"}}>
                        
                        <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt=""/>
                            
                            <div className="social-info"><a href="/"><i className="fa fa-envelope"></i></a><a href="/"><i className="fa-solid fa-user"></i></a><a href="/"><i className="fa fa-linkedin"></i></a></div>
                        </div>
                        
                        <div className="single_advisor_details_info">
                            <h6>Alejandro Mellado</h6>
                            <p className="designation">Profesor Informacita</p>
                            <p className="designation">Desarrollo web</p>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="single_advisor_profile wow fadeInUp" data-wow-delay="0.5s" style={{visibility: "visible", animationdelay: "0.5s", animationname: "fadeInUp"}}>
                        
                        <div className="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""/>
                            
                            <div className="social-info"><a href="/"><i className="fa fa-envelope"></i></a><a href="/"><i className="fa-solid fa-user"></i></a><a href="/"><i className="fa fa-linkedin"></i></a></div>
                        </div>
                        
                        <div className="single_advisor_details_info">
                            <h6>Marcos Levano Pe</h6>
                            <p className="designation">Jefe de Carrera </p>
                            <p className="designation">Teorida de la Computacion </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}