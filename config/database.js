var mongoose = require('mongoose');
//database connection
let url=process.env.database_url;
mongoose.connect(url, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Database connected");
});

module.exports.db=db