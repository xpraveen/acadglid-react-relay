var babelRelayPlugin = require("babel-relay-plugin");
var schemaData = require("../data/schema.json").data;
module.exports = babelRelayPlugin(schemaData);
