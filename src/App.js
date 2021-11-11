import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import OurCar from './Component/OurCar/OurCar/OurCar';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/ourcar">
            <OurCar></OurCar>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
