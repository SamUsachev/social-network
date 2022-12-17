import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
function ProfileInfo(props) {
  // if (!props.photos) {
  //   return (
  //     <img
  //       className={style.userIcon}
  //       src="https://cdn.onlinewebfonts.com/svg/download_131793.png"
  //       width={150}
  //     />
  //   );
  // }
  return (
    <div>
      <div>
        <img src="https://i.unusual-travels.com/images/001/image-08-36.jpg" />
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <h4>Your status:</h4>
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}
export default ProfileInfo;
