export const loadFailed = () => ({
  type: "loadFailed",
});

export const loadData = (payload) => ({
  type: "loadData",
  payload,
});

export const loadActivities = (payload) => ({
  type: "loadActivities",
  payload,
});

export const setSorting = (payload) => ({
  type: "setSorting",
  payload,
});

export const setFilters = (payload) => ({
  type: "setFilters",
  payload,
});

export const setSearch = (payload) => ({
  type: "setSearch",
  payload,
});

export const nextPage = () => ({ type: "nextPage" });

export const previousPage = () => ({ type: "previousPage" });
