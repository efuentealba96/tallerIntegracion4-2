import React from 'react';
import { Link } from 'react-router-dom';
import Input from '@iso/components/uielements/input';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import ForgotPasswordStyleWrapper from './ForgotPassword.styles';

export default function() {
  return (
    <ForgotPasswordStyleWrapper className="isoForgotPassPage">
      <div className="isoFormContentWrapper">
        <div className="isoFormContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="Olvideste tu contraseña" />
            </Link>
          </div>

          <div className="isoFormHeadText">
            <h3>
              <IntlMessages id="Olvidaste tu contraseña , recuperala ingresando tu Email" />
            </h3>
            <p>
              <IntlMessages id="Ingresa tu Email y te enviaremos una respuesta para recuperar tu contraseña." />
            </p>
          </div>

          <div className="isoForgotPassForm">
            <div className="isoInputWrapper">
              <Input size="large" placeholder="Email" />
            </div>

            <div className="isoInputWrapper">
              <Button type="primary">
                <IntlMessages id="Enviar" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ForgotPasswordStyleWrapper>
  );
}
