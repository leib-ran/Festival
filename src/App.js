import "./App.css";
import Page from "./compenents/productPage/Page";
import MainCatalogPage from "./compenents/catalogPage/MainCatalogPage";
import { Route, Switch } from "react-router";
import Contact from "./compenents/contactPage/Contact";
import About from "../src/compenents/about/About";
import LogIn from "./compenents/sighnin/SighnIn";
import Blog from "./compenents/blog/Blog";
import signUp from "./compenents/sighnup/sighnup";
function App() {
  return (
    <header>
      <div className="page"></div>
      <Switch>
        <Route path="/productPage" component={Page} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/" component={signUp} />

        <Route exact path="/store" component={MainCatalogPage} />
      </Switch>
    </header>
  );
}

export default App;
