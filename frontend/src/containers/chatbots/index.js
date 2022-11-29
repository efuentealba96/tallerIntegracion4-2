import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import "./chatbot.css"


export default function chatbot(){
    
    return(
        <>
          
            <ChatBot className="Bot"
                style={{float:"right"}}
                headerTitle="Uctin"

                
                steps={[
                  {
                    id: '1',
                    message: 'Hola selecciona una opción  para poder ayudarte',
                    trigger: '2',
                    
                  },
                  {
                    id: '2',
                    options: [
                      { value: 1, label: 'Email', trigger: '3' },
                      { value: 2, label: 'Contactos', trigger: '4' },
                      { value: 3, label: 'Documentos', trigger: '5' },
                      { value: 4, label: 'Nota P', trigger: '6' },
                      { value: 5, label: 'Inscripcion de Ramos ', trigger: '7' },
                      { value: 6, label: 'Notas Parciales ', trigger: '8' },
                    ],
                  },
                  {
                    id: '3',
                    message: 'En Email podras encontrar tus correos y podras enviar correos a tus contactos.',
                    end:true,
                    
                  },
                  {
                    id: '4',
                    message: 'En Contactos encontraras el directorio de profesores de tu carrera y secretarias.',
                    end: true,
                  },
                  {
                    id: '5',
                    message: 'En Documentos podras Generar tus documentos necesarios para tu desarrollo universitario.',
                    end: true,
                  },
                  {
                    id: '6',
                    message: 'En Nota P podras solicitar esta calificacion cuando la situacion sea adversa para el desarrollo de algun curso.',
                    end: true,
                  },
                  {
                    id: '7',
                    message: 'En Inscripcion de Ramos encontraras el listados de cursos y electivos que puedes inscribir para tu avance curricular.',
                    end: true,
                  },
                  {
                    id: '8',
                    message: 'En Notas Parciales podras verificar tus notas y asistencias.',
                    end: true,
                  },
                  
                  

                ]}
                
                />
            
        </>
    )
}