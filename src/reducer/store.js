//reducer is only from frontend state
//it cannot talk to the database

export default (state = {}, action) => {
  let {type, payload} = action;
  switch (type) {
    case 'STORE_SET':
    console.log('(((())))', payload);
      return payload;
    default:
      return state;
  }
};