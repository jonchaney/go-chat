import { connect } from 'react-redux';

import ChatClient from './chatClient.js';
import { createMessage } from '../../actions/messageActions.js';

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  createMessage: (message) => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatClient);
