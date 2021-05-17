import logo from './logo.svg';
import classes from './App.module.scss'
import {Redirect, Route, Switch} from "react-router";
import Main from "./containers/Main/Main";

function App() {
  return (
    <div className={classes.app}>
      <Switch>
        <Route path={'/'} component={Main} exact/>
        <Redirect to={'/'} component={Main}/>
      </Switch>
    </div>
  );
}

export default App;
