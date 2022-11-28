import React from 'react';
import userPhoto from './../assets/images/user.png';
import styles from './users.module.css';

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
debugger;

export default Users;
