var Hook = require('hook.io').Hook,
		util = require('util');

var GitHubHook = exports.GitHubHook = function(options) {
	var self = this;
	Hook.call(self, options);
	self.on("*::processGitHub", self.processData);
};

util.inherits(GitHubHook, Hook);

GitHubHook.prototype.processData = function(data) {
		var self = this;
		self.log(self.name, "github-hook...", data);
};