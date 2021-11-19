import React from 'react';
import Home from "../pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import ProductDetail from '../pages/ProductDetail'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/> 
                    <Route path='/product-detail/:id' component={ProductDetail}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
 
export default App;