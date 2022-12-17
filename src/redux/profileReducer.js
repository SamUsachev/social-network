import { profileAPI, usersAPI } from '../api/api';

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const INCRESE_LIKE_BY_ID = 'INCRESE-LIKE-BY-ID';
const SET_STATUS = 'SET_STATUS';

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
  status: '',
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
    case ADD_NEW_POST_TEXT: {
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
    case UPDATE_NEW_POST_TEXT: {
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case INCRESE_LIKE_BY_ID: {
      state.postData.map((post) =>
        post.id === action.payload ? { ...post, likes: post.likes + 1 } : post
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
    case SET_STATUS: {
      return { ...state, status: action.status };
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
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI
    .getProfile(userId)

    .then((response) => {
      dispatch(setUserProfile(response.data));
      // this.props.setTotalUsersCount(response.data.totalCount);
    });
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)

    .then((response) => {
      dispatch(setStatus(response.data));
    });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI
    .updateStatus(status)

    .then((response) => {
      if (response.resuktCode === 0) {
        dispatch(setStatus(status));
      }
    });
};
export default profileReducer;
