import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from './../assets/images/user.png';
import styles from './users.module.css';
import axios from 'axios';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  // let curPage = this.props.currentPage;
  // let curPageFirst = curPage - 5 < 0 ? 0 : curPage - 5;
  // let curPageLast = curPage + 5;
  // let slicedPages = pages.slice(curPageFirst, curPageLast);

  // let newPages;
  // if (this.props.currentPage <= 5) {
  //   newPages = pages.slice(0, 10);
  // } else {
  //   newPages = pages.slice(
  //     this.props.currentPage - 5,
  //     this.props.currentPage + 5
  //   );
  // }

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && styles.selectedPage}
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': 'f2f6f44e-aeb1-4989-94e4-e6adde4d5f67',
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode == 0) {
                            props.unfollow(u.id);
                          }
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              'API-KEY': 'f2f6f44e-aeb1-4989-94e4-e6adde4d5f67',
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode == 0) {
                            props.follow(u.id);
                          }
                        });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </span>
          <span>
            <span>
              <div>{u.name} </div>
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
