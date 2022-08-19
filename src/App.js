import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';


//import Welcome from './component/Welcome';
//import Message from './component/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" /> 
      {/* <Message/> */}
       
       {/* <Welcome/> */}

    <Counter/>
     
  
      </header>
    </div>
  );
}

export default App;