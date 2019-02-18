const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb+srv://danubia:d3d4dfjkl2@cluster0-svheo.mongodb.net/test?retryWrites=true'
    }
}
module.exports = variables;