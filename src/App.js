import "./App.css";
import ProductPage from "./compenents/ProductPage/ProductPage";
import { Route, Switch } from "react-router-dom";
import Contact from "./compenents/ContactPage/Contact";
import About from "./compenents/About/About";
import Blog from "./compenents/Blog/Blog";
import Navbar from "./compenents/Header/Navbar";
import BottomPage from "./compenents/Footer/BottomPage";
import HomePage from "./compenents/HomePage/HomePage";
import CartPage from "./compenents/Cart/CartPage";
import React, { useEffect } from "react";
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
import { AccountPage } from "./compenents/SignIn/AccountPage";
import { ProfilePage } from "./compenents/Profile/ProfilePage";
import { AuthRouteGeneral } from "./compenents/AuthRouter/AuthRouteGeneral";
import CheckoutPage from "./compenents/CheckoutPage/CheckoutPage";
import { useDispatch, useSelector } from "react-redux";
import { isLogin, updateUser } from "./actions";
import { getUser } from "./helper/userTools";
import { isObjectEmpty } from "ra-core/esm/form/submitErrorsMutators";

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    try {
      const user = await getUser();
      dispatch(updateUser(getUser()));
      dispatch(isLogin(!isObjectEmpty(user)));
    } catch {
      dispatch(updateUser({}));
      dispatch(isLogin(false));
    }
  }, []);

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
            <Route path={productPage.getPath()} component={ProductPage} />
            <Route path={blog.getPath()} component={BlogContent} />
            <Route path={profile.getPath()} component={ProfilePage} />
            <Route path={checkout.getPath()} component={CheckoutPage} />

            <AuthRouteGeneral
              path={login.getPath()}
              pathRe={profile.getPath()}
              component={AccountPage}
            />
          </Switch>
        </div>
        <BottomPage />
      </div>
    </div>
  );
}

export default App;
