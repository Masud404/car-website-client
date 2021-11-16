import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Admin from './Component/Dashbord/Admin/Admin';
import Dashbord from './Component/Dashbord/Dashbord';
import ManageAllOrders from './Component/Dashbord/ManageAllOrders/ManageAllOrders';
import MyOrders from './Component/Dashbord/MyOrders/MyOrders';
import Pay from './Component/Dashbord/Pay/Pay';
import ProductsManages from './Component/Dashbord/ProductsManages/ProductsManages';
import Review from './Component/Dashbord/Review/Review';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login/Login';
import SignUp from './Component/Login/SignUp/SignUp';
import NotFound from './Component/NotFound/NotFound';
import OurCar from './Component/OurCar/OurCar/OurCar';
import PurchaseCar from './Component/PurchaseCar/PurchaseCar';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './hooks/PrivateRoute/PrivateRoute';
import AddAProduct from './Component/Dashbord/AddAProduct/AddAProduct';
import ReviewMessage from './Component/ReviewMessage/ReviewMessage';


function App() {
  return (
    <div>
      <AuthProvider>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/purchasecar/:purchasecarId">
              <PurchaseCar></PurchaseCar>
            </PrivateRoute>
            <PrivateRoute path="/dashbord">
              <Dashbord></Dashbord>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/manageproduct">
              <ProductsManages></ProductsManages>
            </PrivateRoute>
            <PrivateRoute path="/addaproducts">
              <AddAProduct></AddAProduct>
            </PrivateRoute>
            <Route path="/reviewmessage">
              <ReviewMessage></ReviewMessage>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
