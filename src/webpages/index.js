import React from 'react';
import {
  BrowserRouter as Routes,


  Route

} from "react-router-dom";
import Home from './home';
import MyBooks from './mybooks';
import Favorites from './favorites';
import Layout from '../components/Layout'
import contact from './contact';
const Webpages = () => {
    return(
        <Routes>
            <Layout>
            <Route exact path="/" component= {Home} />
            <Route path = "/mybooks" component = {MyBooks} />
            <Route path = "/favorites" component = {Favorites} />
            <Route path = "/contact" component = {contact} />
            </Layout>
        </Routes>
        
    );
};
export default Webpages;