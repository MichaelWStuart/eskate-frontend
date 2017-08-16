//sync actions
//talk to the redux store
export const addToCart = (item) => ({
  type: 'ITEM_ADD',
  payload: item,
});
