import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import CardsNotas from './Cards/CardsNotas';
import Cuerpo from './NotasParciales/index'
import ChatBot from "./chatbots/index"
export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <CardsNotas/>
          <Cuerpo/>
          <ChatBot/>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}