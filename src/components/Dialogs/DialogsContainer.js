import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  const sendMessageClick = () => {
    props.dispatch(sendMessageActionCreator());
  };
  const newMessageChange = (body) => {
    props.dispatch(updateNewMessageActionCreator(body));
  };

  return (
    <Dialogs
      sendMessage={sendMessageClick}
      updateNeMessageBody={newMessageChange}
      dialogsPage={state}
    />
  );
};
export default DialogsContainer;
