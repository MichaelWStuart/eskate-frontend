import superagent from 'superagent';

export const userSet = user => ({
  type: 'USER_SET',
  payload: user,
});

export const userCreate = user => ({
  type: 'USER_CREATE',
  payload: user,
});

export const userUpdate = user => ({
  type: 'USER_UPDATE',
  payload: user,
});

export const userDelete = user => ({
  type: 'USER_DELETE',
  payload: user,
});

export const userCreateRequest = user => dispatch =>
  //eslint-disable-next-line
  superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then((res) => {
      dispatch(userCreate(res.body));
      return res;
    });

export const usersFetchRequest = user => dispatch =>
  //eslint-disable-next-line
  superagent.get(`${__API_URL__}/login`)
    .auth({ username: user.username, password: user.password })
    .then((res) => {
      dispatch(userSet(res.body));
      return res;
    });
