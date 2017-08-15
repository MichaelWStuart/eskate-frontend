import superagent from 'superagent';

//sync actions
//talk to the redux store
export const storeSet = (storesettings) => ({
  type: 'STORE_SET',
  payload: storesettings,
});


export const storeSettingsFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/store`)
    .then((res) => {
      console.log('****', res.body);
      dispatch(storeSet(res.body[0]));
    return res;
  });
}
