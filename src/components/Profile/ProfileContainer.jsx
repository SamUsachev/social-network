import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';

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

    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth) {
      return <Navigate to="/login" />;
    }

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.postsPage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUserProfile })(
  withRouter(ProfileContainer)
);
