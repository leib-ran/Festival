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

function App() {
  return (
    <div>
      <div
        className="flex flex-col justify-between bg-no-repeat bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: "url(/images/links/link_desert_item.jpg)",
        }}
      >
        <Switch>
          <div className="flex flex-col justify-between	min-h-screen">
            <Navbar />
            <Route exact path="/store" component={CategoryArea} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogIn} />
            <Route path="/productPage/:id" component={ProductPage} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Blog" component={Blog} />
            <Route exact path="/SignUp" component={signUp} />
            <BottomPage />
          </div>
        </Switch>
      </div>
    </div>
  );
}

export default App;
