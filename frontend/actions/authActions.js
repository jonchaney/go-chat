export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = (username, email) => ({
  type: RECEIVE_USER,
  username,
  email
});