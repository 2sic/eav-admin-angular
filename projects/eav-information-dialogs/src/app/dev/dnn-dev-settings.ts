import { RuntimeSettings } from '@2sic.com/dnn-sxc-angular';

const set = new RuntimeSettings();
set.ignoreMissing$2sxc = true;
set.ignoreMissingServicesFramework = true;
set.moduleId = 27;
set.path = '/desktopmodules/2sxc/api/';
set.appNameInPath = 'blog';

export const DnnDevSettings = set;
