import superagent from 'superagent';

export const fetchItemsRequest = () => (dispatch) => {
  console.log('hit fetchItemsRequest');
  return superagent.get(`${__API_URL__}/item`)
  .then(items => {
    console.log('items: ', items.body);
  })
}
