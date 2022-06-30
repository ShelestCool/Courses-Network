import { Switch, Route } from "react-router-dom";
import {AboutPage, CoursesPage, HomePage, StudentsPage} from "../../pages";


export const Content = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/courses" component={CoursesPage} />
    <Route path="/students" component={StudentsPage} />
    <Route path="/about" component={AboutPage} />
  </Switch>
);

export default Content;
