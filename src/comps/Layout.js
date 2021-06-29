import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navber from "./Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core";
import Contact from "../pages/Contact";
import News from "../pages/News";
import NewPost from "../pages/NewsPost";
import Login from "../pages/Login";

const useStyle = makeStyles((theme) => {
  return {
    root: {
      minHeight: "100vh",
      position: "relative",
      //   display: "flex",
    },
    toolbar: theme.mixins.toolbar,
  };
});

function Layout() {
  const classes = useStyle();
  return (
    <Router>
      <div className={classes.root}>
        <Navber />
        <div className="content">
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/post">
              <NewPost />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default Layout;
