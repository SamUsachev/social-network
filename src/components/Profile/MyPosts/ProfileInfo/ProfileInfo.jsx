import React from 'react';
import style from './ProfileInfo.module.css';
function ProfileInfo(props) {
  if (!props.profile) {
    return <div>aaa</div>;
  }
  return (
    <div>
      <div>
        <img
          src="https://i.unusual-travels.com/images/001/image-08-36.jpg"
          width="100%"
        />
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} />
        DESCRIPTION
      </div>
    </div>
  );
}
export default ProfileInfo;
