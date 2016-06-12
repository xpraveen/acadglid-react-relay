import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} from "graphql";

import {globalIdField, toGlobalId} from "graphql-relay";

import {getBooks, getAuthor} from "./database";

let authorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: (obj) => toGlobalId("Author", obj.id)
        },
        firstName: {
            type: GraphQLString
        },
        lastName: {
            type: GraphQLString
        }
    })
});

let bookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: (obj) => toGlobalId("Book", obj.id)
        },
        title: {
            type: GraphQLString
        },
        author: {
            type: authorType,
            resolve: (obj) => {
                return getAuthor(obj.authorId);
            }
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
