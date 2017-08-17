import superagent from 'superagent';

export const itemSet = items => ({
  type: 'ITEM_SET',
  payload: items,
});

export const itemCreate = item => ({
  type: 'ITEM_CREATE',
  payload: item,
});

export const itemUpdate = item => ({
  type: 'ITEM_UPDATE',
  payload: item,
});

export const itemDestroy = item => ({
  type: 'ITEM_DESTROY',
  payload: item,
});

export const itemsFetchRequest = () => dispatch =>
//eslint-disable-next-line
  superagent.get(`${__API_URL__}/item`)
    .then(items => dispatch(itemSet(items.body)));

export const itemCreateRequest = item => (dispatch, getState) => {
  const { user } = getState();
  const photo = item.photoURI;
  delete item.photoURI;
//eslint-disable-next-line
  superagent.post(`${__API_URL__}/item`)
    .set('Authorization', `Bearer ${user}`)
    .field('item', JSON.stringify(item))
    .attach('file', photo)
    .then(response => {
      console.log(JSON.parse(response.text))
      return dispatch(itemCreate(JSON.parse(response.text)))
    });
};

export const itemUpdateRequest = item => (dispatch, getState) => {
  const { user } = getState();
//eslint-disable-next-line
  superagent.put(`${__API_URL__}/item/${item._id}`)
    .set('Authorization', `Bearer ${user}`)
    .send(item)
    .then(response => dispatch(itemUpdate(response)));
};

export const itemDeleteRequest = item => (dispatch, getState) => {
  const { user } = getState();
//eslint-disable-next-line
  superagent.delete(`${__API_URL__}/item/${item._id}`)
    .set('Authorization', `Bearer ${user}`)
    .then(response => dispatch(itemDestroy(response)));
};
