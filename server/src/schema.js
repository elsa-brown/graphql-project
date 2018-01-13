import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
type Message {
  id: ID!                
 	content: String
}

type Language {
	name: String
}

type Query {
  messages: [Message]
  language: Language
}


type Mutation {
  addMessage(content: String!): Message
  setLanguage(name: String): Language
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
