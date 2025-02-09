import BackgroundAnimation from "@/components/BackgroundAnimation"
import BackgroundMusic from "@/components/BackgroundMusic"
import {  Route, Switch, Redirect } from "react-router-dom";
import Loading from "./loading/page"
import Intro1 from "./intro1/page"
import Intro2 from "./intro2/page"
import Intro3 from "./intro3/page"
import Intro4 from "./intro4/page"
import Q1 from "./questions/page"
import Q2 from "./questions2/page"
import Q3 from "./questions3/page"
import Q4 from "./questions4/page"
import End1 from "./end/page"
import End2 from "./end2/page"
import End3 from "./end3/page"
import End4 from "./end4/page"
import End5 from "./end5/page"
import Award from "./award/page"

export const PagesRouters = () => {
  return (
    <BackgroundMusic>
      <BackgroundAnimation>
        <Switch>
          <Route path="/pages/loading" exact>
            <Loading/>
          </Route>
          <Route path="/pages/intro1"  >
            <Intro1/>
          </Route>
          <Route path="/pages/intro2" exact>
            <Intro2/>
          </Route>
          <Route path="/pages/intro3" exact>
            <Intro3/>
          </Route>
          <Route path="/pages/intro4" exact>
            <Intro4/>
          </Route>
          <Route path="/pages/questions">
            <Q1/>
          </Route>
          <Route path="/pages/questions2" exact>
            <Q2/>
          </Route>
          <Route path="/pages/questions3" exact>
            <Q3/>
          </Route>
          <Route path="/pages/questions4" exact>
            <Q4/>
          </Route>
          <Route path="/pages/end">
            <End1/>
          </Route>
          <Route path="/pages/end2" exact>
            <End2/>
          </Route>
          <Route path="/pages/end3" exact>
            <End3/>
          </Route>
          <Route path="/pages/end4" exact>
            <End4/>
          </Route>
          <Route path="/pages/end5" exact>
            <End5/>
          </Route>
          <Route path="/pages/award" exact>
            <Award/>
          </Route>
          <Route path="*">
            <Redirect to="/pages/loading" />
          </Route>
          {/* 若有其他子路由可以在此加入 */}
        </Switch>
      </BackgroundAnimation>
    </BackgroundMusic>
  );
}