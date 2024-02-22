import styled from 'styled-components';

export const ChatContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column; 
`;







export const MessageContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;



  background-color: #f0f0f0;
  align-self: flex-start; 
`;

export const OptionsContainer = styled.div`
  margin-top: 10px;

  button {
    margin-right: 10px;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f0f0f0;


    
    &:hover {
      background-color: #e0e0e0;
    }
  }
`;
