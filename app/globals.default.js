'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "pool.cdxfkj.cn",
		api_url : 'https://api.cdxfkj.cn',
		api_refresh_interval: 5000,
		app_update_interval: 30*60000
	};
});