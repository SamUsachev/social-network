import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileActionCreator } from '../../redux/profileReducer';

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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
        // this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.postsPage.profile,
});
const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (profile) => {
      dispatch(setUserProfileActionCreator(profile));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
