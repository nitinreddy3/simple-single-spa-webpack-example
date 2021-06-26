import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app-1', () =>
  import('../react/app1.js'), pathPrefix('/react'));
singleSpa.registerApplication('app-2', () =>
  import('../angular/app2.js'), pathPrefix('/angular'));

singleSpa.start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}