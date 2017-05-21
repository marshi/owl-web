import React from 'react'
import App from "./App";
import {IndexRoute, Route} from "react-router/lib";
import Index from "./component/Index";
import TicketCreate from "./TicketCreate";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="/tickets/create" component={TicketCreate}/>
    <Route path="*" component={App}/>
  </Route>
);