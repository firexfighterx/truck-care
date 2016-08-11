import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
  </Route>
);
