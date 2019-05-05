// import { RuntimeSettings } from '@2sic.com/dnn-sxc-angular';

// const set = new RuntimeSettings();
// set.ignoreMissing$2sxc = true;
// set.ignoreMissingServicesFramework = true;
// set.moduleId = 27;
// set.path = '/desktopmodules/2sxc/api/';
// set.appNameInPath = 'blog';

// export const DnnDevSettings = set;

import { RuntimeSettings } from '@2sic.com/dnn-sxc-angular';

const set = new RuntimeSettings();
set.ignoreMissing$2sxc = true;
set.ignoreMissingServicesFramework = true;

// The base path to your DNN environment's API
// In most of the cases, this is http://[domain]/DesktopModules/2sxc/API/
set.path = 'http://2sxc-dnn-742.dnndev.me/DesktopModules/2sxc/API/';

// The module and tab id to get data from
set.moduleId = 3002; // dnn local dev blog module
set.tabId = 680; // dnn local dev blog page


// In most of the cases, you won't need to set this as it's the same as the module id
// set.contentBlockId = 0;

// Set this value to allow requests to APIs that are secured with anti forgery
// set.antiForgeryToken = 'ThisIsaTestAntiForgeryToken';

// Override the app name - only needed if you do not set module and tabid values
// set.appNameInPath = 'app-dnn-sxc-angular-dev'

// Set this to send authenticated requests
set.withCredentials = true;

export const DnnDevSettings = set;
