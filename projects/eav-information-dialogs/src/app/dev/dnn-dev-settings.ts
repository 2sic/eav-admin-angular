import { DevContext } from '@2sic.com/dnn-sxc-angular';

const set = new DevContext();
set.ignoreMissing$2sxc = true;
set.ignoreMissingServicesFramework = true;
set.moduleId = 27;
set.path = '/desktopmodules/2sxc/api/';
set.forceUse = true;

export const DnnDevSettings = set;
