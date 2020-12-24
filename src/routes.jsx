import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import Layout from "./components/hoc/layout";
import PageNotFound from "./pages/PageNotFound";
import Legendaries from "./pages/Legendaries"
export default function Routes() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/pokemon" component={Pokemon} />
        <Route exact path="/legendaries" component={Legendaries}/>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  );
}
