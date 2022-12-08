const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW_PROGRESS = 'FOLLOW_PROGRESS';

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 150,
  currentPage: 1,
  followProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    // case SET_TOTAL_USERS_COUNT:
    //   return {
    //     ...state,
    //     totalUsersCount: action.count,
    //   };
    case FOLLOW_PROGRESS:
      return {
        ...state,
        followProgress: action.followProgress
          ? [...state.followProgress, action.userId]
          : state.followProgress.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const followProgressActionCreator = (followProgress, userId) => ({
  type: FOLLOW_PROGRESS,
  followProgress,
  userId,
});
// export const setTotalUsersCountActionCreator = (totalUsersCount) => ({
//   type: SET_TOTAL_USERS_COUNT,
//   count: totalUsersCount,
// });

export default usersReducer;
