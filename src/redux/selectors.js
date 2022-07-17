const isLoggedIn = state => state.user.isLoggedIn;
const login = state => state.user.login;
const token = state => state.user.token;
const modeTheme = state => state.theme.mode;
const moviesIds = state => state.moviesBox.moviesIds;

export const selectors = { isLoggedIn, login, token, modeTheme, moviesIds };
