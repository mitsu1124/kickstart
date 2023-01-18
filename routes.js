const routes = require('next-routes')();

// routes.add('/campaigns/new', 'campaigns/new');
// routes.add('/campaigns/:address', '/campaigns/show'); // : means wildcard, includes /campaigns/new

routes
	.add('/campaigns/new', 'campaigns/new')
	.add('/campaigns/:address', '/campaigns/show') // : means wildcard, includes /campaigns/new
	.add('/campaigns/:address/requests', '/campaigns/requests/index')
	.add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes; //exports helpers navigate users
