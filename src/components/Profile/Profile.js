import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import style from './Profile.module.css';

function Profile(props) {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // postData={props.postData}
        // dispatch={props.dispatch}
        // newPostText={props.newPostText}
      />
    </div>
  );
}
export default Profile;
