import "./App.css";
import Page from "./compenents/productPage/Page";
import MainCatalogPage from "./compenents/catalogPage/MainCatalogPage";
import { Route, Switch } from "react-router";
import Contact from "./compenents/contactPage/Contact";
import About from "../src/compenents/about/About";
import LogIn from "./compenents/sighnin/SighnIn";
import Blog from "./compenents/blog/Blog";
import signUp from "./compenents/sighnup/sighnup";
import Navbar from "./compenents/header/Navbar";
import BottomPage from "./compenents/footer/BottomPage";
function App() {
  return (
    <div>
      <div className="flex flex-col justify-between	min-h-screen">
        <Switch>
          <Route exact path="/store" component={MainCatalogPage} />

          <Switch>
            <div className="flex flex-col justify-between	min-h-screen">
              <Navbar />
              <Route exact path="/login" component={LogIn} />
              <Route path="/productPage" component={Page} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/Blog" component={Blog} />
              <Route exact path="/" component={signUp} />
              <BottomPage />
            </div>
          </Switch>
        </Switch>
      </div>
    </div>
  );
}

export default App;
