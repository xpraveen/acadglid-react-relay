import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} from "graphql";

import {globalIdField, toGlobalId} from "graphql-relay";

import {getBooks} from "./database";

let bookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: (obj) => toGlobalId("Book", obj.id)
        },
        title: {
            type: GraphQLString
        }
    })
});

const bookStoreType = new GraphQLObjectType({
    name: "BookStore",
    fields: () => ({
        id: globalIdField("BookStore"),
        "books": ({
            type: new GraphQLList(bookType),
            resolve: () => {
                return getBooks();
            }
        })

    })
});

class BookStore {}
const bookStore = new BookStore();

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
