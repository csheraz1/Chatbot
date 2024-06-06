import logo from './logo.svg';
import './App.css';
import { ChatOpenAI } from "@langchain/openai";

// const chatModel = new ChatOpenAI({
//   apiKey: "sk-proj-3z3L2vNZUOddSax3Uvf8T3BlbkFJeY7EJ8aAd2SjaCgf9HNK",
// });
// await chatModel.invoke("what is LangSmith?");


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
