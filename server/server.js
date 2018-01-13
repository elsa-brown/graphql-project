import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';

const Translate = require('@google-cloud/translate')
const projectId = 'graphql-project-192023';
const translate = Translate({
	projectId: projectId,
	key: 'AIzaSyA3W1wvj87WLyyJet33KlAawxW6TVC5Y64'
});

import { schema } from './src/schema';

const PORT = 4000;
const server = express();

server.use('*', cors({ origin: 'http://localhost:3000' }));

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);

module.exports = { translate };
