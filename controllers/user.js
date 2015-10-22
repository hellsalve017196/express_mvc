var user_model = require('../models/user_model');

module.exports.controller = function(app) {

    /**
     * a home page route
     */
    app.get('/', function(req, res) {
        // any logic goes here

        obj = user_model();
        sum = obj.sum(100,500);

        res.render('index',{title:"sum",sum:sum});
    });

    /**
     * About page route
     */
    app.get('/login', function(req, res) {
        // any logic goes here
        res.send('users/login')
    });

}