const info = {
  username: {
    value: "",
    error: "",
  },
  password: {
    value: "",
    error: "",
  },
  terms: {
    value: false,
    error: "",
  },
};

const parseReq = () => {
  const req = {
    username: info.username.value,
    password: info.password.value,
    terms: info.terms.value,
  };
  return req;
};

export { info, parseReq };
