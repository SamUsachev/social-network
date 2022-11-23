import React from 'react';
import MyPosts from './MyPosts';
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postData: state.postsPage.postData,
    newPostText: state.postsPage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => dispatch(addNewPostActionCreator()),
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
