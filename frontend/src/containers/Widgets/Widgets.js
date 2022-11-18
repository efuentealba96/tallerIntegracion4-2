import React from 'react';
import clone from 'clone';
import { Row, Col } from 'antd';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import basicStyle from '@iso/assets/styles/constants';
import IsoWidgetsWrapper from './WidgetsWrapper';
import IsoWidgetBox from './WidgetBox';
import CardWidget from './Card/CardWidget';
import ProgressWidget from './Progress/ProgressWidget';
import SingleProgressWidget from './Progress/ProgressSingle';
import ReportsWidget from './Report/ReportWidget';
import StickerWidget from './Sticker/StickerWidget';
import SaleWidget from './Sale/SaleWidget';
import VCardWidget from './vCard/vCardWidget';
import SocialWidget from './SocialWidget/SocialWidget';
import SocialProfile from './SocialWidget/SocialProfileIcon';
import userpic from '@iso/assets/images/user1.png';
import { isServer } from '@iso/lib/helpers/isServer';
import {
  TableViews,
  tableinfos,
  dataList,
} from '../Tables/AntTables/AntTables';
import * as rechartConfigs from '../Charts/Recharts/config';
import StackedAreaChart from '../Charts/Recharts/Charts/StackedAreaChart';
import GoogleChart from 'react-google-charts';
import * as googleChartConfigs from '../Charts/GoogleChart/config';
import IntlMessages from '@iso/components/utility/intlMessages';
import uct from "./../../assets/images/universidadhero.jpg"
import uctespera from "./../../assets/images/UniCt.jpg"

const tableDataList = clone(dataList);
tableDataList.size = 5;
const styles = {
  wisgetPageStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    overflow: 'hidden',
  },
};
const SIGNLE_PROGRESS_WIDGET = [
  {
    label: 'widget.singleprogresswidget1.label',
    percent: 70,
    barHeight: 7,
    status: 'active',
    info: true,
  },
  {
    label: 'widget.singleprogresswidget2.label',
    percent: 80,
    barHeight: 7,
    status: 'active',
    info: true,
  },
  {
    label: 'widget.singleprogresswidget3.label',
    percent: 40,
    barHeight: 7,
    status: 'active',
    info: true,
  },
  {
    label: 'widget.singleprogresswidget4.label',
    percent: 60,
    barHeight: 7,
    status: 'active',
    info: true,
  },
];

const STICKER_WIDGET = [
  {
    number: 'widget.stickerwidget1.number',
    text: 'Calendario',
    icon: 'ion-calendar',
    fontColor: '#ffffff',
    bgColor: '#7266BA',
    href:'https://www.uct.cl/calendario-academico/'
  },
  {
    number: 'widget.stickerwidget1.number',
    text: 'DGE',
    icon: 'ion-android-camera',
    fontColor: '#ffffff',
    bgColor: '#42A5F6',
  },
  {
    number: 'widget.stickerwidget1.number',
    text: 'Dara',
    icon: 'ion-compass',
    fontColor: '#ffffff',
    bgColor: '#7ED320',
  },
  {
    number: 'widget.stickerwidget1.number',
    text: 'Acompañamiento Daas',
    icon: 'ion-home',
    fontColor: '#ffffff',
    bgColor: '#F75D81',
  },
];

const SALE_WIDGET = [
  {
    label: 'Nuevo',
    price: '21/12/2022',
    details: 'Se acerca el final de Semestre',
    fontColor: '#F75D81',
  },
  {
    label: 'Pago',
    price: '05/12/2022',
    details: 'Ultima fecha para pagar arancel ',
    fontColor: '#F75D81',
  },
  {
    label: 'Tne',
    price: 'En Cualquier Momento y Lugar',
    details: 'si has perdido tu Tne comunicate con nosotros DGE ',
    fontColor: '#F75D81',
  },
  {
    label: 'DAAS',
    price: 'LA DAAS esta contigo',
    details: 'acompañamiento Academico',
    fontColor: '#F75D81',
  },
];

const CARD_WIDGET = [
  {
    icon: 'ion-android-chat',
    iconcolor: '#42A5F5',
    number: 'widget.cardwidget1.number',
    text: 'Correos',
  },
  {
    icon: 'ion-document',
    iconcolor: '#F75D81',
    number: 'widget.cardwidget2.number',
    text: 'Avance de los Cursos Inscritos Actuales',
  },
  {
    icon: 'ion-trophy',
    iconcolor: '#FEAC01',
    number: '21',
    text: 'Cursos Completos',
  },
];

const PROGRESS_WIDGET = [
  {
    label: 'Total de Curso de la Carrera',
    details: '60 % Completado',
    icon: 'ion-archive',
    iconcolor: '#4482FF',
    percent: 60,
    barHeight: 7,
    status: 'active',
  },
  {
    label: 'Electivos DDO-ELte-ELAC',
    details: '80% completado',
    icon: 'ion-pie-graph',
    iconcolor: '#F75D81',
    percent: 80,
    barHeight: 7,
    status: 'active',
  },
  {
    label: 'Cursos Eliminados, Nota P , Reprovados',
    details: '10% de tu total de Cursos ',
    icon: 'ion-android-download',
    iconcolor: '#494982',
    percent: 10,
    barHeight: 7,
    status: 'active',
  },
];

const SOCIAL_PROFILE = [
  {
    url: '#',
    icon: 'ion-social-facebook',
    iconcolor: '#3b5998',
  },
  {
    url: '#',
    icon: 'ion-social-twitter',
    iconcolor: '#00aced',
  },
  {
    url: '#',
    icon: 'ion-social-googleplus',
    iconcolor: '#dd4b39',
  },
  {
    url: '#',
    icon: 'ion-social-linkedin-outline',
    iconcolor: '#007bb6',
  },
  {
    url: '#',
    icon: 'ion-social-dribbble-outline',
    iconcolor: '#ea4c89',
  },
];
export default function() {
  const { rowStyle, colStyle } = basicStyle;

  const chartEvents = [
    {
      eventName: 'select',
      callback(Chart) {},
    },
  ];

  const stackConfig = {
    ...rechartConfigs.StackedAreaChart,
    width: !isServer && window.innerWidth < 450 ? 300 : 500,
  };
  return (
    <LayoutWrapper>
      <div style={styles.wisgetPageStyle}>
        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={8} md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              {/* Report Widget */}
              <ReportsWidget
                label={<IntlMessages id="widget.reportswidget.label" />}
                details={<IntlMessages id="widget.reportswidget.details" />}
              >
                {SIGNLE_PROGRESS_WIDGET.map((widget, idx) => (
                  <SingleProgressWidget
                    key={idx}
                    label={<IntlMessages id={widget.label} />}
                    percent={widget.percent}
                    barHeight={widget.barHeight}
                    status={widget.status}
                    info={widget.info} // Boolean: true, false
                  />
                ))}
              </ReportsWidget>
            </IsoWidgetsWrapper>
          </Col>

          <Col lg={16} md={12} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox>
                {/* TABLE */}
                <div style={{fontSize:"40px"}}>Te invitamos a responder la encueta EODD</div>
                <h1>Respondenos para saber tu opninion </h1>
                <img src={uct}></img>
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          {STICKER_WIDGET.map((widget, idx) => (
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
              <IsoWidgetsWrapper>
                {/* Sticker Widget */}
                <StickerWidget
                  number={<IntlMessages id={widget.number} />}
                  text={<IntlMessages id={widget.text} />}
                  icon={widget.icon}
                  fontColor={widget.fontColor}
                  bgColor={widget.bgColor}
                />
              </IsoWidgetsWrapper>
            </Col>
          ))}
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          {SALE_WIDGET.map((widget, idx) => (
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle} key={idx}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id={widget.label} />}
                  price={<IntlMessages id={widget.price} />}
                  details={<IntlMessages id={widget.details} />}
                  fontColor={widget.fontColor}
                />
              </IsoWidgetsWrapper>
            </Col>
          ))}
        </Row>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            {CARD_WIDGET.map((widget, idx) => (
              <IsoWidgetsWrapper key={idx} gutterBottom={20}>
                {/* Card Widget */}
                <CardWidget
                  icon={widget.icon}
                  iconcolor={widget.iconcolor}
                  number={<IntlMessages id={widget.number} />}
                  text={<IntlMessages id={widget.text} />}
                />
              </IsoWidgetsWrapper>
            ))}
          </Col>

          <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
            {PROGRESS_WIDGET.map((widget, idx) => (
              <IsoWidgetsWrapper key={idx} gutterBottom={20}>
                {/* Progress Widget */}
                <ProgressWidget
                  label={<IntlMessages id={widget.label} />}
                  details={<IntlMessages id={widget.details} />}
                  icon={widget.icon}
                  iconcolor={widget.iconcolor}
                  percent={widget.percent}
                  barHeight={widget.barHeight}
                  status={widget.status}
                />
              </IsoWidgetsWrapper>
            ))}
          </Col>

          <Col lg={12} md={24} sm={24} xs={24} style={colStyle}>
            <IsoWidgetsWrapper>
              <IsoWidgetBox height={448} style={{ overflow: 'hidden' }}>
                <div>
                  <h1 style={{fontSize:"40px"}} >Pagina en proceso de Cambio </h1>
                </div>
                <img style={{width:"500px"}}src={uctespera}></img>
              </IsoWidgetBox>
            </IsoWidgetsWrapper>
          </Col>
        </Row>

        

        
      </div>
    </LayoutWrapper>
  );
}
