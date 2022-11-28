import React, { useState, useEffect, useCallback } from 'react';
import Spin from '@iso/ui/Antd/Spin/Spin';
import Modal from '@iso/ui/Antd/Modal/Modal';
import Container from '@iso/ui/UI/Container/Container';
import AvatarCard from '@iso/components/AvatarCard/AvatarCard';
import LayoutContentWrapper from "@iso/components/utility/layoutWrapper";
import LayoutContent from "@iso/components/utility/layoutContent";
import Wrapper, { Banner,  ContentWrapper } from './Profile.styles';
import { useSelector, useDispatch } from 'react-redux';
import profileActions from '@iso/redux/profile/actions';
import CardsInfo from '../Cards/CardsInfo';
import Table from "./tableprofile"

const Perfil = () => {
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

  const handleMenu = type => {
    if (type === 'post') {
      setActive(type);
    }
    if (type === 'followers') {
      setActive(type);
      setVisible(true);
    }
    if (type === 'following') {
      setActive(type);
      setVisible(true);
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setActive('post');
  };

  return (
    <LayoutContentWrapper style={{ height: "100vh" }}>
    <LayoutContent>
    <Wrapper>
      {loading !== true ? (
        <>
          <Banner
            className="profile-banner"
            style={{ backgroundImage: `url(${data.profile_bg})` }}
          >
            <Container className="container">
              <AvatarCard
                avatar={data.avatar}
                name={data.name}
                username={data.username}
              />
            </Container>
          </Banner>

          

          <ContentWrapper>
            <Container className="container">
              <CardsInfo/>
              <Table/>
              <Modal
                wrapClassName="follow-modal"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
              >
                
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
    </LayoutContent>
    </LayoutContentWrapper>
  );
};

export default Perfil;
