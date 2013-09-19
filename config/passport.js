/**
 * Created with JetBrains PhpStorm.
 * User: mike
 * Date: 9/19/13
 * Time: 4:19 PM
 * To change this template use File | Settings | File Templates.
 */


var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
module.exports = {
    express: {
        customMiddleware: function(app){
            console.log('Express midleware for passport');
            app.use(passport.initialize());
            app.use(passport.session());
        }
    }
};