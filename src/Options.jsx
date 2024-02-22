import React from 'react';
import { OptionsContainer } from './styles';

const Options = ({ onSelect }) => {
  const handleOptionClick = (option) => {
    onSelect(option);
  };

  return (
    <OptionsContainer>
      <button onClick={() => handleOptionClick('Yes')}>Yes</button>
      <button onClick={() => handleOptionClick('No')}>No</button>
    </OptionsContainer>
  );
};

export default Options;
