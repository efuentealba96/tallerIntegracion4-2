import React from 'react'
import ChatBot from 'react-simple-chatbot';

export default function chatbot(){
    return(
        <>
            <ChatBot
                style={{float:"right"}}
                headerTitle="Uctin"
                
                steps={[
                  {
                    id: '1',
                    message: 'Hola usuario Dime en que te puedo servir',
                    trigger: '2',
                  },
                  {
                    id: '2',
                    user: true,
                    trigger: '3',
                  },
                  {
                    id: '3',
                    message: 'Muy Bien para {previousValue}, Necesitas seguir los siguientes pasos ',
                    end: true,
                  },
                ]}
                />
        </>
    )
}