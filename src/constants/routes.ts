export const appPath = '/app';

export const routes = {
  home: '/',
  auth: {
    login: '/login',
    register: '/register',
    passwordRecovery: '/password-recovery',
    logout: '/logout',
  },
  [appPath]: {
    dashboard: appPath + '/dashboard',
    boards: appPath + '/boards',
    account: appPath + '/account',
  }
};