import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddProject from './Components/Add-Project/Add-Project';
import Project from './Components/Project/Project';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <div>
                    <span><Link to="/">Add A project</Link></span>
                </div>
                <hr />

                <Route exact path="/" component={AddProject} />
                <Route path="/projects/:id" component={Project} />
            </div>
        </Router>
    );
  }
}

export default App;
