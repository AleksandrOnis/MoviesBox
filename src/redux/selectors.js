const isLoggedIn = state => state.user.isLoggedIn;
const login = state => state.user.login;
const token = state => state.user.token;
const modeTheme = state => state.theme.mode;
const moviesIds = state => state.moviesBox.moviesIds;
const searchQuery = state => state.search.query;
const page = state => state.pagination.page;
const pageCount = state => state.pagination.pageCount;

export const selectors = {
  isLoggedIn,
  login,
  token,
  modeTheme,
  moviesIds,
  searchQuery,
  page,
  pageCount,
};
