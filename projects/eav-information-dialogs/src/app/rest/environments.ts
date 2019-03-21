
class Environment {
  key: string;
  name: string;
  rootPath: string;
}

export const Environments: Array<Environment> = [
  {
    key: 'dnn7',
    name: 'DNN 7 or higher',
    rootPath: '/desktopmodules/2sxc/api/app/'
  },
  {
    key: 'dnn8',
    name: 'DNN 8 or higher',
    rootPath: '/api/2sxc/app/'
  }
];
