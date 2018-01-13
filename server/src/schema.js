import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Message {
  id: ID!                
 	content: String
}

type Query {
  messages: [Message] 
}


type Mutation {
  addMessage(content: String!): Message
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
