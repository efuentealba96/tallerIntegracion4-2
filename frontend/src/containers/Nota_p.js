import React, { Component } from "react";
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import LayoutContent from "@iso/components/utility/layoutContent";
import "./estiloNota.css";
import ChatBot from "./chatbots/index"
import Cuerpo from "./../containers/NotaP/index.js"
import CardsP from "./Cards/CardsP";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <CardsP/>
          <Cuerpo/>
          <ChatBot/>
        </LayoutContent>
      </LayoutContentWrapper>

    );
  }
}
