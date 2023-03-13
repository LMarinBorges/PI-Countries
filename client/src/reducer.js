const initialState = {
  data: {
    state: "loading",
    countries: [],
    activities: [],
  },
  currentPage: 1,
  search: "",
  filters: {
    continents: [],
    activities: [],
  },
  sorting: {
    field: "name",
    order: "asc",
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "loadFailed": {
      return { ...state, data: { ...state.data, state: "failed" } };
    }
    case "loadData": {
      return {
        ...state,
        data: { ...action.payload, state: "loaded" },
      };
    }
    case "loadActivities": {
      return { ...state, data: { ...state.data, activities: action.payload } };
    }
    case "setSorting": {
      return { ...state, sorting: action.payload };
    }
    case "setFilters": {
      return { ...state, filters: action.payload };
    }
    case "setSearch": {
      return { ...state, search: action.payload };
    }
    case "nextPage": {
      return { ...state, currentPage: state.currentPage + 1 };
    }
    case "previousPage": {
      return { ...state, currentPage: state.currentPage - 1 };
    }
    default: {
      return state;
    }
  }
}
