const getParams = () => {
  const params = new URLSearchParams(window.location.search);
  return params;
};

const queryParse = (query) => {
  const queryKey = query.split("=")[0];
  if (window.location.search === "") {
    return `?${query}`;
  }
  if (window.location.search.includes(queryKey)) {
    const params = getParams().get(queryKey);
    return window.location.search.replace(`${queryKey}=${params}`, query);
  }
  return `${window.location.search}&${query}`;
};

const parseFindNewQuery = (params, fist) => {};

// 添加 query 參數 push
const routerQueryPush = (params) => {
  const { pathname } = window.location;
  const query = queryParse(params);
  window.history.pushState({}, null, `${pathname}${query}`);
};

// 添加 query 參數 replace
const routerQueryReplace = (params) => {
  const { pathname } = window.location;
  const query = queryParse(params);
  window.history.replaceState({}, null, `${pathname}${query}`);
};

// 刪除 query 參數 push
const routerQueryRemove = (params) => {};

// 刪除 query 參數 replace
const routerQueryReplaceRemove = (params) => {};

export {
  routerQueryPush,
  routerQueryReplace,
  routerQueryRemove,
  routerQueryReplaceRemove,
  getParams,
};
