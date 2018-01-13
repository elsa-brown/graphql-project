import React from 'react';
import { gql, graphql } from 'react-apollo';

import AddMessage from './AddMessage';
import LanguageMenu from './LanguageMenu';

const MessageList = ({ data: { loading, error, messages } }) => {
  console.log('messages', messages)
  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="channelsList">
      <AddMessage />
      <LanguageMenu />
      { messages && messages.map( ch => 
        (<div key={ch.id} className={'channel ' + (ch.id < 0 ? 'optimistic' : '')}>{ch.content}</div>)
      )}
    </div>
  );
};

export const messageListQuery = gql`
  query MessageListQuery {
    messages {
      id
      content
    }
  }
`;

export default graphql(messageListQuery, {
  options: { pollInterval: 5000 },
})(MessageList);