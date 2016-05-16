import {GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from "graphql";

let helloCounter = 0;

const query = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
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

export default new GraphQLSchema({query});
