import "./App.css";
import Header from "./components/Header/Header";
import HomeSlider from './components/MainSlider/HomeSlider'
import ProductPage from './components/ProductPage'
import LoginSignup from './components/LoginSignup/LoginSignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer/Footer";

// import UpdatePassword from "./components/Password/UpdatePassword";

function App() {
  return <>
    <Header />
    

    {/* <LoginSignup/> */}
    {/* <ForgotPassword /> */}
    {/* <UpdatePassword/> */}
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductPage} />
        <Route exact path="/loginsignup" exact component={LoginSignup} />
        <Redirect to="/" component={Home} />
      </Switch>
    </Router>
    <Footer class="footer" />
  </>;
}

export default App;
