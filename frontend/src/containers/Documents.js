import React, { Component } from 'react';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from '@iso/components/utility/layoutContent';
import Cards from './Cards/Cards';
import Cuerpo from './Cards/index'
import ChatBot from "./chatbots/index"
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
