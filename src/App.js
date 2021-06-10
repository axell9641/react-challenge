import "./App.scss";

import { Route, Switch } from "react-router-dom";

import LandingPage from "./pages/landing/landing.component";
import logo from "./logo.svg";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to={"/"} /> : <SignInAndSignUpPage />
          }
        /> */}
      </Switch>
    </div>
  );
}

export default App;
