import { connect } from 'react-redux';

import Login from './login.jsx';
import { receiveUser } from "../../actions/authActions";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  login: (username, email) => dispatch(receiveUser(username, email))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
