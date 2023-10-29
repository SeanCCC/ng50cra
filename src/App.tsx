import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Loading from "./app/pages/loading/page";
import { GlobalContextProvider } from '@/app/context/store';
import { AudioProvider } from "@/app/context/audioStore"

import './App.css';

function PagesRouters() {
  return (
    <GlobalContextProvider>
      <AudioProvider>
        <Loading/>
      </AudioProvider>
    </GlobalContextProvider>
  );
}

function App() {
  return (
    <div className='h-full' >
      <Router>
        <Switch>
          <Route path="/pages" exact component={PagesRouters} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
