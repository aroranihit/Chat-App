import React from 'react';
import { MessageContainer } from './styles';

const Message = ({ text, from }) => {
  return <MessageContainer>{from === 'user' ? `You: ${text}` : ` ${text}`}</MessageContainer>;
};

export default Message;
