import React from 'react';
import style from './Post.module.css';

function Post(props) {
  return (
    <div>
      <div>
        <img src="https://kmundo.ch/wp-content/uploads/2021/01/Kunden-Icone.png" />
        {props.message}
      </div>
      <div className={style.like}>
        <button
          onClick={() => {
            console.log(props.id);
            props.onLikeChange(props.id);
          }}
        >
          like
        </button>
        <span>{props.likes}</span>
      </div>
    </div>
  );
}

export default Post;
