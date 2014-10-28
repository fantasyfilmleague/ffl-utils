'use strict';

var path = require('path');
var requireByDir = require('./lib/requireByDir');

requireByDir(__filename, path.join(__dirname, './lib'), exports);
