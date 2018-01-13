const messages = [{
  id: 1,
  content: 'Hello World',
}];
let nextId = 2;

export const resolvers = {
  Query: {
    messages: () => {
      return messages;
    },
  },
  Mutation: {
    addMessage: (root, args) => {
      console.log('args', args)
      const newMessage = { id: nextId++, content: args.content };
      messages.push(newMessage);
      return newMessage;
    },
  },
};
