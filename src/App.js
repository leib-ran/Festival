import "./App.css";
import Page from "./compenents/productPage/Page";
import MainCatalogPage from "./compenents/CatalogPage/MainCatalogPage";
import { Route, Switch } from "react-router";
import Contact from "./compenents/ContactPage/Contact";
import About from "./compenents/About/About";
import LogIn from "./compenents/sighnin/SighnIn";
import Blog from "./compenents/Blog/Blog";
import signUp from "./compenents/sighnup/sighnup";
import Navbar from "./compenents/header/Navbar";
import BottomPage from "./compenents/Footer/BottomPage";
import HomePage from "./compenents/HomePage/HomePage";

function App() {
  return (
    <div>
      <div className="flex flex-col justify-between	min-h-screen">
        <Switch>
          <Route exact path="/store" component={MainCatalogPage} />

          <Switch>
            <div className="flex flex-col justify-between	min-h-screen">
              <Navbar />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LogIn} />
              <Route path="/productPage" component={Page} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/About" component={About} />
              <Route exact path="/Blog" component={Blog} />
              <Route exact path="/SignUp" component={signUp} />
              <BottomPage />
            </div>
          </Switch>
        </Switch>
      </div>
    </div>
  );
}

export default App;
