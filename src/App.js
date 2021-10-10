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
import CartPage from "./compenents/Cart/CartPage";
import React from "react";
import CheckoutPage from "./compenents/CheckoutPage/CheckoutPage";
import CatlogPage from "./compenents/CatalogPage/CatlogPage";
import BlogContent from "./compenents/Blog/BlogContent";
import { ProtectedRoute } from "./compenents/protectedRoute/ProtectedRoute";
import { AdminPage } from "./compenents/Admin/AdminPage";
import {
  about,
  admin,
  blog,
  cart,
  category,
  checkout,
  contact,
  homePage,
  login,
  productPage,
  signUp,
  store,
  profile,
} from "./helper/PathName";

import { CategoryPage } from "./compenents/CategoriesPage/CategoryPage";
import { AcountPage } from "./compenents/SignIn/AcountPage";
import { AuthRouter } from "./compenents/AuthRouter/AuthRouter";
import { Profile } from "./compenents/Profile/Profile";
function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" ">
        <Switch>
          <div className="\	min-h-screen flex flex-col">
            <Navbar />

            <Route exact path={store.getPath()} component={CategoryPage} />
            <Route exact path={homePage.getPath()} component={HomePage} />

            <Route exact path={category.getPath()} component={CatlogPage} />
            <Route exact path={contact.getPath()} component={Contact} />
            <Route exact path={about.getPath()} component={About} />
            <Route exact path={blog.getPath()} component={Blog} />
            <Route exact path={cart.getPath()} component={CartPage} />
            <Route exact path={admin.getPath()} component={AdminPage} />
            <Route exact path={signUp.getPath()} component={SignUp} />
            <Route exact path={profile.getPath()} component={Profile} />
            <AuthRouter path={login.getPath()} component={AcountPage} />
            <Route path={productPage.getPath()} component={ProductPage} />
            <Route path={blog.getPath()} component={BlogContent} />
            {/* <ProtectedRoute
              exact
              path={checkout.path}
              component={CheckoutPage}
            /> */}
            <BottomPage />
          </div>
        </Switch>
      </div>
    </div>
  );
}

export default App;
