import "./App.css";
import ProductPage from "./compenents/Pages/ProductPage/ProductPage";
import { Route, Switch } from "react-router-dom";
import Contact from "./compenents/Pages/ContactPage/Contact";
import About from "./compenents/Pages/About/About";
import Blog from "./compenents/Pages/Blog/Blog";
import Navbar from "./compenents/Header/Navbar";
import BottomPage from "./compenents/Footer/BottomPage";
import HomePage from "./compenents/Pages/HomePage/HomePage";
import CartPage from "./compenents/Cart/CartPage";
import React, { useEffect } from "react";
import CatlogPage from "./compenents/Pages/CatalogPage/CatlogPage";
import BlogContent from "./compenents/Pages/Blog/BlogContent";
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
  search,
  approvedContactPage,
} from "./helper/PathName";

import { CategoryPage } from "./compenents/Pages/CategoriesPage/CategoryPage";
import { AuthRouteGeneral } from "./compenents/AuthRouter/AuthRouteGeneral";
import { CheckoutPage } from "./compenents/Pages/CheckoutPage/CheckoutPage";
import { useDispatch, useSelector } from "react-redux";
import { isLogin, updateUser } from "./actions";
import { getUser } from "./helper/userTools";
import { isObjectEmpty } from "ra-core/esm/form/submitErrorsMutators";
import { SearchPage } from "./compenents/Pages/SearchPage/Search";
import { ProfilePage } from "./compenents/Pages/Profile/ProfilePage";
import { AccountPage } from "./compenents/Pages/SignIn/AccountPage";
import { ApprovedContactPage } from "./compenents/Pages/ApprovedContactPage/ApprovedContactPage";

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
    <div className=" h-full border-box md:min-h-screen flex flex-col">
      <Navbar />
      <div className="md:min-h-screen h-full lg:mt-0 lg:pt-0 pt-16 box-border items-center ">
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
          <Route path={search.getPath()} component={SearchPage} />
          <Route
            path={approvedContactPage.getPath()}
            component={ApprovedContactPage}
          />

          <AuthRouteGeneral
            path={login.getPath()}
            pathRe={profile.getPath()}
            component={AccountPage}
          />
        </Switch>
      </div>
      <div className="hidden md:block">
        <BottomPage />
      </div>
    </div>
  );
}

export default App;
