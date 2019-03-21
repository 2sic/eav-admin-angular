# Routing and Initialization

This document briefly explains how routing works in this app, especially because it has an initialization feature which is a bit unusual.

## Initialization of App

Basically the app needs quite a lot of values to start. But these would be nasty to keep in the url as we're routing around, so the principle is as follows:

1. The real route is behind a hash # - this is important, so the routes work with page-reload, as the page itself should keep it's real address on the server

1. All initialization values are in the url, behind a ?

1. When starting, the app checks for initialization parameters, and places it in the session-storage of the browser, so that these parameters are only used for the current window. These params can then be safely removed from the url, so routing won't need to keep this.

1. If the app loads without url-params (like when someone presses refresh), the url contains no more initialization values, so it will just look at the state and pick up values stored there previously.

1. When reading the real initialization values from the url, the app will apply fallbacks for most values, so it has defaults and just works.

1. internally, all code which needs these initialization parameters can get it from the 'stateService'

## List of Initialization Parameters

To keep the url reasonably short, despite many initialization parameters, the names/keys are fairly cryptic. Here is a full list of initialization parameters:

### Environment Information

* `sxcver` - version of the sxc-environment, internally available on `sxcVersion` (string with ##.##.##)
* `sysver` - version of the host system (usually DNN), internally available on `sysVersion` (string with ##.##.##)
* `sysType` - what the host is - usually "dnn", `sysType` (string)
* `d` - debug on/off, `debug` (bool)

### Paths for Linking and API-Access

All paths start with `rt` for "root". Todo: rename variables to match docs!

* `rtt` - root of tenant, base path to the home page of this web: `rootTenant` (string)
* `rtw` - root of web site, which may be shorter than the tenant root: `rootWeb` (string)
* `rta` - root of the app, which contains templates, apis and more: `rootApp` (string)

### IDs

* `z` - zone Id: `zoneId` (number)
* `a` - app Id: `appId` (number)
* `p` - page Id (in DNN this is the tab Id): `pageId` (number)
* `c` - content Block Id: `contentBlockId` (number)
* `i` - instance Id (in DNN this is the module Id): `instanceId` (number)

### Features

Todo: rename param-names to match docs and variables too

* `fa` - features of app are enabled (like permissions, APIs, settings): `enableApp` (bool)
* `fd` - features for designers are enabled: `enableDesign` (bool)
* `fc` - features for coders / devs are enabled: `enableCode` (bool)

### Languages

* `lp` - primary language: `languagePrimary` (string)
* `lc` - content languages: `languagesContent` (array)
* `lui` - UI languages: `languagesUi` (array) - as of now, identical to content-languages

### Relationship to Context

* `pop` - part of Page (for workflow behavior): `partOfPage` (bool)

### Not yet Implemented Parameters

* `fs` - features for super-users are enabled: `enableSuperuser`
* `t` - tenant id (in DNN, the portal Id): `tenantId` (number)
* `items` - array of keys to be used in dialogs etc.: `items` (array of header-ids)