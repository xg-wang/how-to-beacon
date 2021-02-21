# How To Beacon

Demo how to beacon data from browser to server *reliably*.

Read the post on https://dev.to/xgwang/you-may-not-know-beacon-9ba

## TL;DR

Use `navigator.sendBeacon` on `visibilitychange` and `beforeunload` event. Once your lowest browser supports https://bugs.webkit.org/show_bug.cgi?id=151234 fires on `visibilitychange` only.

## Read Details

- https://developers.google.com/web/updates/2018/07/page-lifecycle-api
- https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/
- https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon
- [Fetch keepalive](https://www.chromestatus.com/feature/5760375567941632)
