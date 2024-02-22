
import React, { useState, useEffect } from 'react';
import Message from './Message';
import Options from './Options';
import { ChatContainer } from './styles';
import DebtOptions from './Debtoptions';
const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Good Morning ", from: 'assistant' }
  ]);
  const [askedForName, setAskedForName] = useState(false);
  const [yesCount, setYesCount] = useState(0);
  const [tempUserName, setTempUserName] = useState('');
  const [userName, setUserName] = useState('');



  const [askedAboutDebt, setAskedAboutDebt] = useState(false);
  const [showDebtOptions, setShowDebtOptions] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Welcome to NDH Financial,Are you looking for Legislated Debt Help to Write Off Your Debts?', from: 'assistant' }
        
      ]);
    }, 2000);

    return () => clearTimeout(timer); 



  }, []);

  const handleUserResponse = (response) => {
    if (!askedForName && response === 'Yes') {
      setYesCount(prevCount => prevCount + 1);
      if (yesCount + 1 === 2) {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: 'You selected: Yes', from: 'user' },



          { text: 'Great! What is your name?', from: 'assistant' }
        ]);
        setAskedForName(true);
      }
    } else if (askedForName && userName === '') {
      setUserName(tempUserName); 
      setMessages(prevMessages => [
        ...prevMessages,
        { text: `Your name is: ${tempUserName}`, from: 'user' },
        { text: `It's good to chat with you, ${tempUserName}!`, from: 'assistant' },
        { text: 'How much debt do you have?', from: 'assistant' }
      ]);







      
      setAskedAboutDebt(true);
    } else if (askedAboutDebt) {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: `You have selected: ${response}`, from: 'user' },
        { text: `Thank you for sharing! What else can I assist you with?`, from: 'assistant' }
      ]);
    } else {
      if (response === 'Yes') {
        setYesCount(prevCount => prevCount + 1);
      } else {
        setMessages(prevMessages => [
          ...prevMessages,
          { text: `You selected: ${response}`, from: 'user' },
          { text: 'Okay! Let me know if you change your mind.', from: 'assistant' }
        ]);
      }
    }
    if (askedAboutDebt) {
      setShowDebtOptions(false); 
    }
  };

  
    
  return (
    <ChatContainer>
      {messages.map((message, index) => (
        <Message key={index} text={message.text} from={message.from} />
      ))}
      {askedForName && userName === '' ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={tempUserName}
            onChange={(e) => setTempUserName(e.target.value)}
            autoFocus
          />
          <button onClick={() => handleUserResponse(tempUserName)}>Submit</button>
        </div>
       /* askedAboutDebt ? (
          showDebtOptions && (
            <DebtOptions
              onSelect={handleUserResponse}
              options={[
                'Less than $10,000',
                '$10,000 - $50,000',
                '$50,000 - $100,000',
                '$100,000 - $500,000',
                'More than $500,000',
                'Prefer not to say'
              ]}*/
      ) : (
        askedAboutDebt ? (
          showDebtOptions && (
            <DebtOptions
              onSelect={handleUserResponse}
              options={[
                'Less than $10,000',
                '$10,000 - $50,000',
                '$50,000 - $100,000',
                '$100,000 - $500,000',
                'More than $500,000',
                'Prefer not to say'
              ]}
            />
          )
        ) : (
          messages[messages.length - 1].from === 'assistant' && !askedForName && (
            <Options
              onSelect={handleUserResponse}
              options={['Yes', 'No']}
            />
          )
        )
      )}
    </ChatContainer>
  );
};

export default Chat;