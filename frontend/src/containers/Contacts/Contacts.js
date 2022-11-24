import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactActions from '@iso/redux/contacts/actions';

import { Layout } from 'antd';

import ContactList from '@iso/components/Contacts/ContactList';
import SingleContactView from '@iso/components/Contacts/SingleView';
import EditContactView from '@iso/components/Contacts/EditView';

import { otherAttributes } from './data';

import { ContactsWrapper } from './Contacts.styles';
import Scrollbar from '@iso/components/utility/customScrollBar';


const {
  changeContact,

  editContact,
  deleteContact,
  viewChange,
} = contactActions;

const { Content } = Layout;
export default function Contacts() {
  const { contacts, selectedId, editView } = useSelector(
    (state) => state.Contacts
  );
  const dispatch = useDispatch();

  const selectedContact = selectedId
    ? contacts.filter((contact) => contact.id === selectedId)[0]
    : null;
  const onVIewChange = () => dispatch(viewChange(!editView));
  return (
    <ContactsWrapper
      className="isomorphicContacts"
      style={{ background: 'none' }}
    >
      <div className="isoContactListBar">
        <ContactList
          contacts={contacts}
          selectedId={selectedId}
          changeContact={(id) => dispatch(changeContact(id))}
          deleteContact={(e) => dispatch(deleteContact(e))}
        />
      </div>
      <Layout className="isoContactBoxWrapper">
        {selectedContact ? (
          <Content className="isoContactBox">
            <div className="isoContactControl">

              
             
            </div>

            <Scrollbar className="contactBoxScrollbar">
              {editView ? (
                <EditContactView
                  contact={selectedContact}
                  editContact={(contact) => dispatch(editContact(contact))}
                  otherAttributes={otherAttributes}
                />
              ) : (
                <SingleContactView
                  contact={selectedContact}
                  otherAttributes={otherAttributes}
                />
              )}
            </Scrollbar>
          </Content>
        ) : (
          <div className="isoContactControl">
            
          </div>
          
        )}
        
      </Layout>
      
      
    </ContactsWrapper>
  );
}
