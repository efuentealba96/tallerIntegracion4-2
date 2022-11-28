import React from 'react'
import {useState} from 'react';
import { Container, Button} from 'react-floating-action-button'
import Chatbot from "./index"
export default function YourAwesomeComponent () {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  
  return (
      <Container >
          {mostrarComponente && <Chatbot/>}
          
          <Button
              color="primary"
              tooltip="The big plus button!"
              icon="ion-power"
              rotate={true}
              onClick={() => setMostrarComponente(!mostrarComponente)}
              styles={{backgroundColor: "#1EA6C8 "}}/>
      </Container>
  )
}