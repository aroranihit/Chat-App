// DebtOptions.jsx
import React from 'react';
import { OptionsContainer } from './styles';

const DebtOptions = ({ onSelect, options }) => {
  const handleOptionClick = (option) => {
    onSelect(option);
  };

  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </button>
      ))}
    </OptionsContainer>
  );
};

export default DebtOptions;
