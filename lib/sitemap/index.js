var ejs = require('ejs');
var settings = require('../../settings');
var quickstartRoutes = require('../quickstart-routes');

var fs = require('fs');
var templateString = fs.readFileSync(__dirname + '/sitemap.xml.ejs').toString();
var tmpl = ejs.compile(templateString);

/**
 * Add all listed settings urls
 */

var urls = settings.menus.navigation.map(function (nav) {
  return nav.items.map(function (i) {
    return i.url;
  });
});

urls = [].concat.apply([], urls);

/**
 * Add quickstart routes
 */

quickstartRoutes.forEach(function(r) {
  urls.push('/quickstart' + r);
});

/**
 * Export `Express` app function wrapper
 */

module.exports = function (app) {
  app.get('/sitemap.xml', function (req, res) {
    res.set('Content-Type', 'application/xml');
    res.send(tmpl({urls: urls}));
  });
};
