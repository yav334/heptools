var coffeeScript = require('coffee-script');
var yo = require('yo');
var p5Cli = require('p5-cli');
var gulp = require('gulp');
var gulpLivereload = require('gulp-livereload');
var gulpNodemon = require('gulp-nodemon');
var gulpNotify = require('gulp-notify');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});