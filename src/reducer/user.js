export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_LOGIN':
      console.log(payload)
      return payload;
    case 'USER_LOGOUT':
      () => {
        console.log(payload)
      }
      return payload;
    default:
      return state;
  }
};
