const { connect, connection } = require('mongoose');

connect('mongodb://127.0.0.1:27017/developersApplications');

module.exports = connection;

//Connection to the DB. In this case we are using MongoDB