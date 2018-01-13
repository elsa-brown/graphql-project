const messages = [{
  id: 1,
  content: 'Hello World',
}];
let nextId = 2;

let language = {};

export const resolvers = {
  Query: {
    messages: () => {
      return messages;
    }
  },
  Mutation: {
    addMessage: (root, args) => {
      const newMessage = { id: nextId++, content: args.content };
      messages.push(newMessage);
      return newMessage;
    },
    setLanguage: (root, { name }) => {
      console.log('selected Language', { name })
    }
  },
};
