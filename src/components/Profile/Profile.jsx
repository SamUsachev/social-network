import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import style from './Profile.module.css';

function Profile() {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}
export default Profile;
