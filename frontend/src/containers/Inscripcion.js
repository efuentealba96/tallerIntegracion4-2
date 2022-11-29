import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import Cards from './Cards/Cardsinscripcion'
import Cuerpo from './Inscripcion/index'
import ChatBot from "./chatbots/index2"

export default class extends Component {
    render() {
      return (
        <LayoutContentWrapper style={{ height: '100vh' }}>
          <LayoutContent>
            <Cards/>
            
            <Cuerpo/>
            <ChatBot/>
          </LayoutContent>
        </LayoutContentWrapper>
      );
    }
  }