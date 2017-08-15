import superagent from 'superagent';

export const userLogin = user => ({
  type: 'USER_LOGIN',
  payload: user,
});

export const userSignup = user => ({
  type: 'USER_LOGOUT',
  payload: user,
});

export const userLoginRequest = user => dispatch =>
  //eslint-disable-next-line
  superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .then((res) => {
      dispatch(userLogin({ token: res.text }));
      return res;
    });
