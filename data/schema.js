import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID} from "graphql";

import {
    globalIdField,
    fromGlobalId,
    toGlobalId,
    connectionDefinitions,
    connectionArgs,
    connectionFromArray,
    nodeDefinitions,
    mutationWithClientMutationId,
    cursorForObjectInConnection
} from "graphql-relay";

import {getBooks, addBook} from "./database";

let {nodeInterface, nodeField} = nodeDefinitions((globalId) => {
    let {type} = fromGlobalId(globalId);
    switch (type) {
        case "BookStore":
            return bookStore;
        default:
            return null;
    }

}, (obj) => {
    if (obj instanceof BookStore) {
        return bookStoreType;
    }
    return null;
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
            type: GraphQLString
        }
    })
});

const bookConnection = connectionDefinitions({name: "Book", nodeType: bookType});

const bookStoreType = new GraphQLObjectType({
    name: "BookStore",
    interfaces: [nodeInterface],
    fields: () => ({
        id: globalIdField("BookStore"),
        "books": {
            type: bookConnection.connectionType,
            args: {
                ...connectionArgs
            },
            resolve: (_, args) => {
                return connectionFromArray(getBooks(), args);
            }
        }
    })
});

class BookStore {}
const bookStore = new BookStore();

const query = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
        node: nodeField,
        bookStore: {
            type: bookStoreType,
            resolve: () => (bookStore)
        }
    })
});


const addBookMutation = mutationWithClientMutationId({
    name: "AddBook",
    inputFields: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        author: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    //This define the Payload fragment.
    outputFields: {
        bookEdge: {
            type: bookConnection.edgeType,
            resolve: (book) => {
                const edge = {
                    cursor: cursorForObjectInConnection(getBooks(), book),
                    node: book
                };
                return edge;
            }
        },

        bookStore: {
            type: bookStoreType,
            resolve: () => bookStore
        }
    },
    mutateAndGetPayload: ({title, author}) => {
        const addedBook = addBook({title, author});
        console.log("addedBook: ", addedBook);
        return addedBook;
    }
});


const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({addBook: addBookMutation})
});

export default new GraphQLSchema({query, mutation});
