CreateHttpHostProxy = require('create-proxy');
var phosts = JSON.parse('{
  "daveeddy.com": "daveeddy.com",
  "google.com": "google.com:80",
  "github.com": {
    "host": "github.com",
    "port": 80
  },
  "foo": "localhost:8081"
}');

CreateHttpHostProxy(phosts,'host','port')
