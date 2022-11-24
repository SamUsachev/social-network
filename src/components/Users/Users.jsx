import axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import userPhoto from './../assets/images/user.png';

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                className={styles.userPhoto}
              />
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    Follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                )}
              </div>
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName} </div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.country'}</div>
              <div>{'u.location.city'}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;