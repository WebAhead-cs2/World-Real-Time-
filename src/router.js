/* eslint-disable linebreak-style */

const homeHandler = require('./home');
const publicHandler = require('./public');

// eslint-disable-next-line require-jsdoc
function router(request, response) {
  const {url} = request;
  if (url == '/') {
    homeHandler(request, response);
  } else if (url.includes('public')) {
    publicHandler(request, response);
  }
}
module.exports = router;
