import React from 'react';
import { useParams } from 'react-router-dom';
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

export default connect(mapStateToProps, { getUserProfile })(
  withRouter(ProfileContainer)
);
