
export default (state=[], action) => {
  let {type, payload} = action;

  switch (type) {
    case 'ITEM_SET':
      return payload;

    default: return state;
  }
};
