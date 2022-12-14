import React from 'react';
import {
  sendMessageActionCreator,
  updateNewMessageActionCreator,
} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    updateNeMessageBody: (body) =>
      dispatch(updateNewMessageActionCreator(body)),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
