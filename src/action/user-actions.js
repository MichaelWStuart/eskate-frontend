import superagent from 'superagent';

export const userLogin = user => ({
  type: 'USER_LOGIN',
  payload: user,
});

export const userSignup = user => ({
  type: 'USER_SIGNUP',
  payload: user,
});

export const userSignupRequest = user => dispatch =>
  //eslint-disable-next-line
  superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then((res) => {
      dispatch(userSignup(res.body));
      return res;
    });

export const userLoginRequest = user => dispatch =>
  //eslint-disable-next-line
  superagent.get(`${__API_URL__}/login`)
    .send({ username: user.username, password: user.password })
    .then((res) => {
      dispatch(userLogin(res.body));
      return res;
    });
