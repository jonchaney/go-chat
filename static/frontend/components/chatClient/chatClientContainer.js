import { connect } from 'react-redux';

import ChatClient from './chatClient.js';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatClient);
