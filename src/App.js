import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./containers/Home";
import ContactUs from "./containers/ContactUs/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./containers/Post";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route exact path="/" component={Home} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/post" component={Post} />
      </div>
    </Router>
  );
}

export default App;
