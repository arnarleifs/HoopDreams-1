const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema'); //setup later (schema) 
const resolvers = {}; //setup later (resolvers)
const myDB = require('./data/db')
const basketballfieldService = require('./services/basketballFieldService')

const server = new ApolloServer({

    typeDefs,
    resolvers,
    context: {
        db: myDB,
        services: basketballfieldService
    }
    
});

server.listen()
    .then(({ url }) => console.log(`GraphQL Service is running on ${ url }`));
