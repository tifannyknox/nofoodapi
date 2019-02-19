const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://danubia:1234567890@cluster0-svheo.mongodb.net/test?retryWrites=true'
    }
};
module.exports = variables;