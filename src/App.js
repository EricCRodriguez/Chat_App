import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="ee28931c-829a-4bd1-99c9-ce1a0a8a91ab"
      userName="secondcitydev"
      userSecret="RAy5Xi4knXhnEHV"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );   
};

  

export default App;
