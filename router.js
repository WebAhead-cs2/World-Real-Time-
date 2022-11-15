/* eslint-disable linebreak-style */

const homeHandler = require('./src/home');
const publicHandler = require('./src/public');
const missingHandler = require('./src/missing');
// eslint-disable-next-line require-jsdoc
function router(request, response) {
  const url = request.url;
  if (url == '/') {
    homeHandler(request, response);
  } else if (url.includes('src/Public')) {
    publicHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}
module.exports = router;
