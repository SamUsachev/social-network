import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import {
  follow,
  setFollowProgress,
  getUsers,
  setCurrentPage,
  // setTotalUsersCountActionCreator,
  setUsers,
  unfollow,
} from '../../redux/usersReducer';
import Users from './Users';

class UsersContainer extends React.Component {
  componentDidMount() {
    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    //     {
    //       withCredentials: true,
    //     }
    //   )
    this.props.getUsers(this.props.currentPage, this.props.pageSize);

    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((response) => {
    //     this.props.setUsers(response.data.items);
    //     // this.props.setTotalUsersCount(response.data.totalCount);
    //   });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsers(currentPage, this.props.pageSize);

    // // axios
    // //   .get(
    // //     `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
    // //     {
    // //       withCredentials: true,
    // //     }
    // //   )
    // usersAPI.getUsers(currentPage, this.props.pageSize).then((response) => {
    //   this.props.setUsers(response.data.items);
    // });
  };

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setFollowProgress={this.props.setFollowProgress}
        followProgress={this.props.followProgress}
      />
    );
    debugger;
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    followProgress: state.usersPage.followProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setFollowProgress,
  getUsers,
})(UsersContainer);
