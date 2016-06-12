import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt} from "graphql";

import {globalIdField} from "graphql-relay";

let helloCounter = 0;
let lastLogin;

const userType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: globalIdField("user"),
        firstName: {
            type: GraphQLString,
            resolve: () => {
                return "John";
            }
        },
        lastName: {
            type: GraphQLString,
            resolve: () => {
                return "Doe";
            }
        },
        age: {
            type: GraphQLInt,
            resolve: () => {
                return 35;
            }
        },
        lastLoginTimeStamp: {
            type: GraphQLString,
            resolve: () => {
                const _lastLogin = lastLogin;
                lastLogin = new Date();
                return _lastLogin?_lastLogin.toISOString(): _lastLogin;
            }
        }
    })
});

const bookStoreType = new GraphQLObjectType({
    name: "BookStore",
    fields: () => ({
        id: globalIdField("BookStore"),
        hello: {
            type: GraphQLString,
            resolve: () => {
                helloCounter++;
                return `${helloCounter}: Hello World`;
            }
        },
        counter: {
            type: GraphQLInt,
            resolve: () => helloCounter
        }
    })
});

class BookStore {}
let bookStore = new BookStore();

class User {}
let user = new User();

const query = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
        bookStore: {
            type: bookStoreType,
            resolve: () => (bookStore)
        },
        user: {
            type: userType,
            resolve: () => (user)
        }
    })
});

export default new GraphQLSchema({query});
