import React from 'react';
import { gql, graphql } from 'react-apollo';

import { messageListQuery } from './MessageListWithData';

const AddMessage = ({ mutate }) => {
  const handleKeyUp = (evt) => {
    console.log('evt.target.value', evt.target.value)
    if (evt.keyCode === 13) {
      evt.persist();
      mutate({ 
        variables: { content: evt.target.value },
        optimisticResponse: {
          addMessage: {
            content: evt.target.value,
            id: Math.round(Math.random() * -1000000),
            __typename: 'Message',
          },
        },
        update: (store, { data: { addMessage } }) => {
          const data = store.readQuery({query: messageListQuery });
          data.messages.push(addMessage);
          store.writeQuery({ query: messageListQuery, data });
        },
      })
      .then( res => {
        evt.target.value = '';  
      });
    }
  };

  return (
    <input
      type="text"
      placeholder="New message"
      onKeyUp={handleKeyUp}
    />
  );
};

const addMessageWithMutation = gql`
  mutation addMessage($content: String!) {
    addMessage(content: $content) {
      id
      content
    }
  }
`;


const AddMessageWithMutation = graphql(
  addMessageWithMutation,
)(AddMessage);

export default AddMessageWithMutation;