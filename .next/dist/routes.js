"use strict";

var routes = require("next-routes")();

routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show")
// Second argument is simply the Next.js pages structure
.add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "campaigns/requests/new");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGtCQUN5QixBQUR6QixrQkFFRyxBQUZILElBRU8sQUFGUCx1QkFFOEIsQUFGOUI7QUFHRSxBQUhGO0NBSUcsQUFKSCxJQUlPLEFBSlAsZ0NBSXVDLEFBSnZDLDZCQUtHLEFBTEgsSUFLTyxBQUxQLG9DQUsyQyxBQUwzQzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Wb2x1bWVzL1Bob3RvX0RyaXZlL3Byb2plY3RzL0VkdWNhdGlvbmFsL2tpY2tzdGFydGVyLWV0aGVyZXVtLWNsb25lIn0=