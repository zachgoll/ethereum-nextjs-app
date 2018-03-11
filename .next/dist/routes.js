"use strict";

var routes = require("next-routes")();

routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show")
// Second argument is simply the Next.js pages structure
.add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "campaigns/requests/new");

module.exports = routes;