import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt} from "graphql";

import {
    globalIdField
} from "graphql-relay";

let helloCounter = 0;

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


const query = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
        bookStore: {
            type: bookStoreType,
            resolve: () => (bookStore)
        }
    })
});

export default new GraphQLSchema({query});
