export const appPath = '/app';

export const routes = {
  home: '/',
  auth: {
    login: '/login',
    register: '/register',
    passwordRecovery: '/password-recovery',
  },
  [appPath]: {
    main: appPath + '/main',
  }
};