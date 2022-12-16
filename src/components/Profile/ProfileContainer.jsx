import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from '../../redux/profileReducer';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    const params = useParams();
    return <Component {...props} router={{ params }} />;
  };
  return ComponentWithRouterProp;
};
class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.router.params.userId;
    if (!userId) {
      userId = 26995;
    }

    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Navigate to="/login" />;
    }

    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.postsPage.profile,
  isAuth: state.auth.isAuth,
  status: state.postsPage.status,
});

export default connect(mapStateToProps, {
  getUserProfile,
  getStatus,
  updateStatus,
})(withRouter(ProfileContainer));
