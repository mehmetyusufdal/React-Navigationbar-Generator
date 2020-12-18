import './App.css';
import Navbargenerator from "./navbar-generator/navbargenerator";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const navitems = [
  {
      title: "HOME",
      path: "/",
  },
  {
      title: "ABOUT",
      path: "/about",
  },
  {
      title: "PROJECTS",
      path: "/projects",
  },
  {
      title: "BLOG",
      path: "/blog",
  },
  {
      title: "CONTACT",
      path: "/contact",
  }
]

function App() {
  return (
    <Router>
        <Switch>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
    </Router>
  );
}

function Home() {
  return(
    <div>
      <Navbargenerator navitems={navitems} TextClass="text-light" isFixedTop={true}/>

      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <h1>Home Screen</h1>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

function About() {
  return(
    <div>
      <Navbargenerator navitems={navitems} TextClass="text-light" isFixedTop={true}/>

      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <h1>About Screen</h1>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

function Projects() {
  return(
    <div>
      <Navbargenerator navitems={navitems} TextClass="text-light" isFixedTop={true}/>

      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <h1>Projects Screen</h1>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

function Blog() {
  return(
    <div>
      <Navbargenerator navitems={navitems} TextClass="text-light" isFixedTop={true}/>

      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <h1>Blog Screen</h1>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

function Contact() {
  return(
    <div>
      <Navbargenerator navitems={navitems} TextClass="text-light" isFixedTop={true}/>

      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <h1>Contact Screen</h1>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
