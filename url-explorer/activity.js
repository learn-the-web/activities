var
  baseUrl = document.querySelectorAll('.base-url'),
  i = 0, t = baseUrl.length,
  form = document.querySelector('form'),
  main = document.querySelector('main')
;

for (i; i<t; i++) {
  baseUrl[i].innerHTML = window.location.host + '/url-explorer/';
}

document.addEventListener('click', function (e) {
  if (e.target.tagName.toUpperCase() == 'A') {
    e.preventDefault();
  }
});

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  });
}

if (main) {
  main.removeAttribute('hidden');
}
