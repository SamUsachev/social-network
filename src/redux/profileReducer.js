const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  postData: [
    {
      message: 'Today I learned something new',
      id: '1',
      likeCount: '15 likes',
      likes: 0,
    },
    { message: 'Hey, How are you?', id: '2', likeCount: '19 likes', likes: 0 },
    { message: 'Very happy', id: '3', likeCount: '12 likes', likes: 0 },
  ],
  newPostText: '',
  profile: null,
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
        likes: 0,
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
    case 'INCRESE-LIKE-BY-ID': {
      console.log();
      console.log(action);
      console.log(
        state.postData.map((post) =>
          post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
        )
      );
      return {
        ...state,
        postData: state.postData.map((post) =>
          post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
        ),
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addNewPostActionCreator = () => ({ type: 'ADD-NEW-POST-TEXT' });
export const updateNewPostTextActionCreator = (text) => {
  return { type: 'UPDATE-NEW-POST-TEXT', newText: text };
};
export const increseLikeByIdActionCreator = (id) => ({
  type: 'INCRESE-LIKE-BY-ID',
  payload: id,
});

export const setUserProfileActionCreator = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export default profileReducer;
