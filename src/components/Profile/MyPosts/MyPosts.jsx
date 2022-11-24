import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  const newPost = React.useRef();

  const onAddNewPost = () => {
    //props.addNewPost();
  };

  const onPostChange = () => {
    let text = newPost.current.value;
    props.updateNewPostText(text);
  };

  const onLikeChange = (id) => {
    console.log(id);
    props.increseLike(id);
  };

  const postElements = props.postData.map((post) => (
    <Post
      key={post.id}
      message={post.message}
      likes={post.likes}
      onLikeChange={onLikeChange}
      id={post.id}
    />
  ));

  return (
    <div>
      <div className={style.postsBclock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPost}
              value={props.newPostText}
            />
          </div>
          <div>
            <button className={style.but} onClick={onAddNewPost}>
              Add post
            </button>
          </div>
        </div>
      </div>
      <div className={style.posts}>{postElements}</div>
    </div>
  );
}
export default MyPosts;
