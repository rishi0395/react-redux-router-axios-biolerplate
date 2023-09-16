export const stateApi = (val) =>
  `http://hn.algolia.com/api/v1/search/?query=${val}`;
