require('dotenv').config();

const ROUTES = [
	{
		url: '/login',
		auth: false,
		proxy: {
			target: process.env.MS_AUTH_HOST,
			changeOrigin: true,
		},

	},
	{
		url: '/api/*',
		auth: true,
		proxy: {
			target: process.env.MS_BACKEND_HOST,
			changeOrigin: true,
		},
	},
];

exports.ROUTES = ROUTES;
