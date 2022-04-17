import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Footer from './FooterComponents';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import AddProduct from './pages/AddProduct';
import Cart from './pages/Cart';
import MProducts from './pages/MProducts';
import MProfile from './pages/MProfile';
// import AdminProject from './pages/AdminProject';

import Products from './pages/Products';
import Profile from './pages/Profile';

class Main extends Component {
    

    render() {
        
        const HomePage = () => {
            return (
                <Home/>
            );
        }
        
        const ProductPage= () => {
            return (
                <Products />
            );
        }
        const ProfilePage= () => {
            return (
                
                <Profile />
                
            );
        }
        const MProfilePage= () => {
            return (
                
                <MProfile />
                
            );
        }
        const CartPage= () => {
            return (
                
                <Cart />
                
            );
        }
        const AddProductPage= () => {
            return (
                
                <AddProduct />
                
            );
        }
        const MProductsPage= () => {
            return (
                
                <MProducts />
                
            );
        }
        return (
            
        <div>
            <Header/>
            <Switch>
                <Route path="/home" component={HomePage}/>
                
                <Route path="/products" component={ProductPage} />
                <Route path="/addProduct" component={AddProductPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/mprofile" component={MProfilePage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/mproducts" component={MProductsPage} />
                

                {/* <Route path = "" */}
                <Redirect to='/home'/>
            </Switch>
            <Footer/>
        </div>
        )
    }
}

export default Main;
