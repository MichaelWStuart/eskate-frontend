import superagent from 'superagent';

export const itemSet = (items) => ({
  type: 'ITEM_SET',
  payload: items,
});

export const itemsFetchRequest = () => (dispatch) => {
  console.log('hit fetchItemsRequest');
  return superagent.get(`${__API_URL__}/item`)
  .then(items => {
    console.log('items: ', items.body);
    dispatch(itemSet(items.body));
  });
};
