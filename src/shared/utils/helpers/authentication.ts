export const checkIsAuthenticated = () => {
    const user = { isLoggedIn: false };
    return user && user?.isLoggedIn;
  };