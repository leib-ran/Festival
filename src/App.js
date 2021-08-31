import "./App.css";
import ProductPage from "./compenents/ProductPage/ProductPage";
import CategoryArea from "./compenents/CatalogPage/CategoryArea";
import { Route, Switch } from "react-router";
import Contact from "./compenents/ContactPage/Contact";
import About from "./compenents/About/About";
import LogIn from "./compenents/SignIn/SignIn";
import Blog from "./compenents/Blog/Blog";
import signUp from "./compenents/SignUp/SignUp";
import Navbar from "./compenents/Header/Navbar";
import BottomPage from "./compenents/Footer/BottomPage";
import HomePage from "./compenents/HomePage/HomePage";
import Cart from "./compenents/Cart/Cart";
import React from "react";
import CheckoutPage from "./compenents/CheckoutPage/CheckoutPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quan: localStorage.getItem("quan") || 0,
    };
    this.updateCart = this.updateCart.bind(this);
  }

  updateCart(quan) {
    let current = Number(this.state.quan) + Number(quan);
    localStorage.setItem("quan", current);
    this.setState({ quan: current });
  }

  render() {
    return (
      <div>
        <div className="flex flex-col justify-between bg-no-repeat bg-cover bg-center min-h-screen">
          <Switch>
            <div className="flex flex-col justify-between	min-h-screen">
              <Navbar quan={this.state.quan} />
              <Route exact path="/store" component={CategoryArea} />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LogIn} />
              <Route
                path="/productPage/:id"
                component={(props) => (
                  <ProductPage
                    {...props}
                    update={this.updateCart}
                  ></ProductPage>
                )}
              />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Blog" component={Blog} />
              <Route exact path="/SignUp" component={signUp} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <BottomPage />
            </div>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
