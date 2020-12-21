import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import Search from './Components/SearchBar';
const App = () => {
  return (
    <div className="App">
       <h2>Welcome to App Component</h2>
    {/* <BrowserRouter>
      <ul>
        <li><Link to="/search">Search</Link></li>
      </ul>
     
      <Route path="/search" component={Search}></Route> 
      </BrowserRouter> */}
    </div>
  );
}

export default App;
