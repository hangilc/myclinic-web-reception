"use strict";

var web = require("myclinic-web");

var subs = [
	{
		name: "reception",
		module: require("myclinic-reception"),
		configKey: "reception"
	}
];

web.cmd.runFromCommand(subs, {
	port: 9004
});
