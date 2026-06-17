"use strict";
var urlConstants;
(function (urlConstants) {
    urlConstants["LOCAL"] = "Local Env";
    urlConstants["STAGING"] = "staging";
    urlConstants["DEVELOPMENT"] = "Development";
    urlConstants["PRODUCTION"] = "Procu";
})(urlConstants || (urlConstants = {}));
function testEnv(testenvironment) {
    console.log(`We are in ${testenvironment}`);
}
testEnv(urlConstants.DEVELOPMENT);
