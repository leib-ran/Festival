import "./App.css";
import ProductPage from "./compenents/ProductPage/ProductPage";
import { Route, Switch } from "react-router-dom";
import Contact from "./compenents/ContactPage/Contact";
import About from "./compenents/About/About";
import Blog from "./compenents/Blog/Blog";
import SignUp from "./compenents/SignUp/SignUp";
import Navbar from "./compenents/Header/Navbar";
import BottomPage from "./compenents/Footer/BottomPage";
import HomePage from "./compenents/HomePage/HomePage";
import CartPage from "./compenents/Cart/CartPage";
import React from "react";
import CatlogPage from "./compenents/CatalogPage/CatlogPage";
import BlogContent from "./compenents/Blog/BlogContent";
import { AdminPage } from "./compenents/Admin/AdminPage";
import {
  about,
  admin,
  blog,
  cart,
  category,
  contact,
  homePage,
  login,
  productPage,
  signUp,
  store,
  profile,
  checkout,
} from "./helper/PathName";

import { CategoryPage } from "./compenents/CategoriesPage/CategoryPage";
import { AcountPage } from "./compenents/SignIn/AcountPage";
import { ProfilePage } from "./compenents/Profile/ProfilePage";
import { AuthRouteGeneral } from "./compenents/AuthRouter/AuthRouteGeneral";
import { AuthRoutProfile } from "./compenents/AuthRouter/AuthRoutProfile";
import CheckoutPage from "./compenents/CheckoutPage/CheckoutPage";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" ">
        <Navbar />
        <div className="\	min-h-screen flex flex-col">
          <Switch>
            <Route exact path={store.getPath()} component={CategoryPage} />
            <Route exact path={homePage.getPath()} component={HomePage} />
            <Route exact path={category.getPath()} component={CatlogPage} />
            <Route exact path={contact.getPath()} component={Contact} />
            <Route exact path={about.getPath()} component={About} />
            <Route exact path={blog.getPath()} component={Blog} />
            <Route exact path={cart.getPath()} component={CartPage} />
            <Route path={admin.getPath()} component={AdminPage} />
            <Route exact path={signUp.getPath()} component={SignUp} />
            <AuthRoutProfile
              exact
              path={profile.getPath()}
              pathRe={login.getPath()}
              component={ProfilePage}
            />
            <AuthRouteGeneral
              path={login.getPath()}
              pathRe={profile.getPath()}
              component={AcountPage}
            />
            <Route path={productPage.getPath()} component={ProductPage} />
            <Route path={blog.getPath()} component={BlogContent} />
          </Switch>
          <AuthRoutProfile
            exact
            pathRe={login.getPath()}
            path={checkout.getPath()}
            component={CheckoutPage}
          />
        </div>
        <BottomPage />
      </div>
    </div>
  );
}

export default App;
