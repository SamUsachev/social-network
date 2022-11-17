let initialState = {
  messageData: [
    { message: 'Hey', id: '1' },
    { message: 'How are you?', id: '2' },
    { message: 'Thanks', id: '3' },
  ],
  dialogData: [
    { name: 'Sam', id: '1' },
    { name: 'Victor', id: '2' },
    { name: 'Alena', id: '3' },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE-NEW-MESSAGE') {
    state.newMessageText = action.body;
  } else if (action.type === 'SEND-MESSAGE') {
    let body = state.newMessageText;
    state.newMessageText = '';
    state.messageData.push({ message: body, id: '4' });
  }
  return state;
};

export const updateNewMessageActionCreator = (body) => ({
  type: 'UPDATE-NEW-MESSAGE',
  body: body,
});
export const sendMessageActionCreator = () => ({ type: 'SEND-MESSAGE' });

export default dialogsReducer;
