const validateUser = (payload) => {
  if (!payload._id) throw new Error('VALIDATION ERROR: user must have _id');
  if (!payload.name) throw new Error('VALIDATION ERROR: user must have name');
};

export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_SIGNUP':
      validateUser(payload);
      return payload;
    case 'USER_LOGIN':
      validateUser(payload);
      return payload;
    default:
      return state;
  }
};
