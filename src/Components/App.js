import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home/HomePage.jsx';
import AboutPage from './About/AboutPage.jsx'
import Header from './Common/Header.jsx'
import PageNotFound from './PageNotFound';
import CoursesPage from './Courses/CoursesPage.jsx';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default App;