import React from 'react';
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

function MyPostsContainer(props) {
  let state = props.store.getState();
  let addNewPost = () => {
    props.store.dispatch(addNewPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addNewPost={addNewPost}
      postData={state.postsPage.postData}
      newPostText={state.postsPage.newPostText}
    />
  );
}
export default MyPostsContainer;
