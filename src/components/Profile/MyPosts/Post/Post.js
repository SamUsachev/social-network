import React from 'react'
import style from './Post.module.css'



function Post(props) {
  return (
    <div>
      <div>
        <img src='https://kmundo.ch/wp-content/uploads/2021/01/Kunden-Icone.png' />
        {props.message}
      </div>
      <div className={style.like}>
        <span>{props.likeCount}</span>
      </div>
    </div>
  )
}

export default Post
