import "./App.css";
import ProductPage from "./compenents/ProductPage/ProductPage";
import CategoryArea from "./compenents/CatalogPage/CategoryArea";
import { Route, Switch } from "react-router-dom";
import Contact from "./compenents/ContactPage/Contact";
import About from "./compenents/About/About";
import LogIn from "./compenents/SignIn/SignIn";
import Blog from "./compenents/Blog/Blog";
import SignUp from "./compenents/SignUp/SignUp";
import Navbar from "./compenents/Header/Navbar";
import BottomPage from "./compenents/Footer/BottomPage";
import HomePage from "./compenents/HomePage/HomePage";
import Cart from "./compenents/Cart/Cart";
import React from "react";
import CheckoutPage from "./compenents/CheckoutPage/CheckoutPage";
import CatlogPage from "./compenents/CatalogPage/CatlogPage";
import BlogContent from "./compenents/Blog/BlogContent";

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
      <div className="min-h-screen flex flex-col">
        <div className=" ">
          <Switch>
            <div className="\	min-h-screen flex flex-col">
              <Navbar quan={this.state.quan} />
              <Route exact path="/store" component={CatlogPage} />
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
              <Route
                path="/Blog/:id"
                component={(props) => <BlogContent {...props} />}
              />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Blog" component={Blog} />
              <Route exact path="/SignUp" component={SignUp} />
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
