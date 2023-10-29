import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import {PagesRouters} from "@/app/pages/layout"
import { GlobalContextProvider } from '@/app/context/store';
import { AudioProvider } from "@/app/context/audioStore"

import './App.css';

function App() {
  return (
    <div className='h-full'>
      <Router>
        <GlobalContextProvider>
          <AudioProvider>
            <Switch>
              <Route path="/pages" component={PagesRouters} />
              {/* 若有其他路由可以在此加入 */}
              <Route path="*">
                <Redirect to="/pages/loading" />
              </Route>
            </Switch>
          </AudioProvider>
        </GlobalContextProvider>
      </Router>
    </div>
  );
}


export default App;
