import "./App.css";
import Layout from "./components/layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import PettableFeature from "./components/PettableFeature";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <PettableFeature />
          </Route>
          <Route path="/thankyou" exact>
            <ThankYou />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
