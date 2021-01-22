

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Product from './Components/Pages/Product';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>    
      <BrowserRouter>
          <Navbar>
          </Navbar>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/service"  component={Services}></Route>
            <Route path="/product"  component={Product}></Route>
            <Route path="/sign-up"  component={SignUp}></Route>
          </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
