//reducer is only from frontend state
//it cannot talk to the database

export default (state = [], action) => {
  let {type, payload} = action;
  switch (type) {
    case 'ITEM_ADD':
    console.log('(((())))', payload);
      return [...state, payload];
    default:
      return state;
  }
};
