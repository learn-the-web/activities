var
  base = '/url-explorer',
  urls = [
    '/',
    '/start/',
    '/products/',
    '/products/?page=2',
    '/products/258/',
    '/products/258/#reviews',
    '/products/258/?rating=4',
    '/products/',
    '/products/?q=mom',
    '/shopping-cart/?add=1138',
    '/shopping-cart/check-out/'
  ],
  saveState = function (url, level) {
    var currentUrl = sessionStorage.getItem('expected-url');

    if (currentUrl != url) {
      sessionStorage.setItem('expected-url', url);
      sessionStorage.setItem('level', parseInt(sessionStorage.getItem('level'), 10) + 1);
    }
  },
  getState = function () {
    return {
      url: sessionStorage.getItem('expected-url'),
      level: parseInt(sessionStorage.getItem('level'), 10)
    }
  },
  expectedUrl = getState().url,
  match,
  url = window.location.href.split(base)[1]
;

console.log(url, expectedUrl);

if (url !== '/') {
  if (!expectedUrl) {
    window.location = base + '/404/';
  }

  match = urls.indexOf(expectedUrl);

  if (match < getState().level) {
    match = urls.lastIndexOf(expectedUrl);
  }

  if (url == expectedUrl || url == urls[match + 1]) {
    // Nothing; couldn't figure out the reverse
  } else {
    window.location = base + '/404/';
  }
}
