import superagent from 'superagent';
import { cookieFetch, cookieDelete } from '../lib/util.js';

export const userLogin = user => ({
  type: 'USER_LOGIN',
  payload: user,
});

export const userLogout = () => ({
  type: 'USER_LOGOUT',
  payload: null,
});

export const userLoginRequest = user => dispatch =>
  //eslint-disable-next-line
  superagent.get(`${__API_URL__}/admin/login`)
    .withCredentials()
    .auth(user.username, user.password)
    .then((res) => {
      console.log('&&&&&&&',res );
      const token = res.text
      if (token) dispatch(userLogin(token));
      return res;
    });

export const userLogoutRequest = () => (dispatch) => {
  cookieDelete('Admin-Token');
  dispatch(userLogout());
};
