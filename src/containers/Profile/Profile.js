import React, { useState, useEffect, useCallback } from 'react';
import Spin from '@iso/ui/Antd/Spin/Spin';
import Modal from '@iso/ui/Antd/Modal/Modal';
import Container from '@iso/ui/UI/Container/Container';
import Followers from './Followers/Followers';
import Following from './Following/Following';
import Wrapper, { ContentWrapper } from './Profile.styles';
import { useSelector, useDispatch } from 'react-redux';
import profileActions from '@iso/redux/profile/actions';
import "./estiloPerfil.css"

const MyProfile = () => {
  const data = useSelector(state => state.profile.data);
  const loading = useSelector(state => state.profile.loading);
  const dispatch = useDispatch();
  const getProfile = useCallback(
    () => dispatch(profileActions.fetchProfileDataStart()),
    [dispatch]
  );

  const [active, setActive] = useState('post');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  

  const handleCancel = () => {
    setVisible(false);
    setActive('post');
  };

  return (
    <Wrapper>
      {loading !== true ? (
        <>
          <ContentWrapper>
            <Container className="container">
                <div class="main-body">
                
                      
                      
                
                      <div class="row gutters-sm">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <div class="card-body">
                              <div class="d-flexx">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                              </div>
                              <div class="mt-3">
                                <br></br>
                                <h4 className='r2'>Nombre<p className='r1'></p></h4>
                                <br></br>
                                <p className='r2'>Carrera:<p className='r1'></p></p>
                                <br></br>
                                <p className='r2'>Rut:<p className='r1'></p></p>
                                <br></br>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="card mb-3">
                            <div class="card-body">
                              <div class="row">
                                <div class="col-sm-3">
                                  <h6 className="mb-0">Correo alternativo</h6>
                                </div>
                                <div class="textcard">
                                  username@alu.uct.cl
                                </div>
                              </div>
                              <hr/>
                              
                              
                              <div class="row">
                                <div class="col-sm-3">
                                  <h6 className="mb-0">Numero telefonico alternativo</h6>
                                </div>
                                <div class="textcard">
                                  (+569) 00000000
                                </div>
                              </div>
                              <hr/>
                              <div class="row">
                                <div class="col-sm-3">
                                  <h6 className="mb-0">Numero alternativo nuevo</h6>
                                </div>
                                <div class="textcard">
                                  (+569) 00000000
                                </div>
                              </div>
                              <hr/>
                              <div class="row">
                                <div class="col-sm-12">
                                  <a class="btn-btn-info " target="__blank" href="/"><b>Actualizar</b></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
              <Modal
                wrapClassName="follow-modal"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
              >
                {active === 'followers' && <Followers data={data.followers} />}
                {active === 'following' && <Following data={data.following} />}
              </Modal>
            </Container>
          </ContentWrapper>
        </>
      ) : (
        <div
          style={{
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spin />
        </div>
      )}
    </Wrapper>
  );
};

export default MyProfile;
