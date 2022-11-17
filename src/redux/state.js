import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';

let store = {
  _state: {
    postsPage: {
      postData: [
        {
          message: 'Today I learned something new',
          id: '1',
          likeCount: '15 likes',
        },
        { message: 'Hey, How are you?', id: '2', likeCount: '19 likes' },
        { message: 'Very happy', id: '3', likeCount: '12 likes' },
      ],
      newPostText: '',
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.postsPage = profileReducer(this._state.postsPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

window.storage = storage;

export default store;
