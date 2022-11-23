let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  // if (action.type === 'ADD-NEW-POST-TEXT') {
  //   let newPost = {
  //     message: state.newPostText,
  //     id: 4,
  //     likeCount: '0 likes',
  //   };
  //   state.postData.push(newPost);
  //   state.newPostText = '';
  // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
  //   state.newPostText = action.newText;
  // }
  // return state;
  let stateCopy = { ...state };

  switch (action.type) {
    case 'ADD-NEW-POST-TEXT': {
      let newPost = {
        message: state.newPostText,
        id: 4,
        likeCount: 0,
      };
      stateCopy.postData = [...state.postData];
      stateCopy.postData.push(newPost);
      stateCopy.newPostText = ' ';
      return stateCopy;
    }
    case 'UPDATE-NEW-POST-TEXT': {
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({ type: 'ADD-NEW-POST-TEXT' });
export const updateNewPostTextActionCreator = (text) => {
  return { type: 'UPDATE-NEW-POST-TEXT', newText: text };
};

export default profileReducer;
