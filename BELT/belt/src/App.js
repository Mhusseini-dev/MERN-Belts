import { Router } from '@reach/router';
import './App.css';
import Poll from './components/Poll';
import CreatePollForm from './components/CreatePollForm';
import Home from './components/Home';
import Votes from './components/Votes';


function App() {

  return (
    <div className="App">
    <h1>Voting Dojo</h1>
      <Router>
        <Home path="/"/>
        <CreatePollForm path="/createQuestion" />
        <Poll path="/poll/:id" />
        <Votes path="/vote/:id" />
      </Router>
      
    </div>
  );
}

export default App;
