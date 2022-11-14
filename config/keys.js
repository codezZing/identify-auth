// atlas
// dbPassword = 'mongodb+srv://admin:'+ encodeURIComponent('password') + '@User.mongodb.net/test?retryWrites=true';

// local
// dbPassword = 'mongodb://admin:password@localhost:27017';

// docker
dbPassword = 'mongodb://admin:password@mongodb:27017'

module.exports = {
    mongoURI: dbPassword
};
