module.exports = function(app, auth) {
    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

    //NBA routes
    var players = require('../app/controllers/players');
    app.get('/players/:name', players.show);
    app.get('/teams/:team', players.team);
    app.get('/teams', players.all);
};
