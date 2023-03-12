export const dataLoaded = (payload) => ({
  type: "dataLoaded",
  payload,
});

export const reloadActivities = (payload) => ({
  type: "reloadActivities",
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
