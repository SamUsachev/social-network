import React from 'react'
import style from './ProfileInfo.module.css'
function ProfileInfo() {
  return (
    <div>
      <div>
        <img
          src='https://i.unusual-travels.com/images/001/image-08-36.jpg'
          width='100%'
        />
      </div>
      <div className={style.descriptionBlock}>
        <img src='https://kmundo.ch/wp-content/uploads/2021/01/Kunden-Icone.png' />
        DESCRIPTION
      </div>
    </div>
  )
}
export default ProfileInfo
