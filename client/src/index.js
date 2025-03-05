import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './index.css';

// JSX components
import Navigation from './components/Navigation'
import Home from './components/Home'
import Store from './components/Store'
import Ownership from './components/Ownership'
import Transfer from './components/Transfer'
import Me from './components/Me'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
    <Navigation />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/ownership" element={<Ownership />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/me" element={<Me />} />
        <Route path='*' exact={true} element={<NotFound />} >
      </Route>
    </Routes>
    <Footer />
    </Router>,

    document.getElementById("root")
);


serviceWorker.unregister();
