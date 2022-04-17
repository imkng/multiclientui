import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import Slideshow from '../customs/SlideShow'
import Product from './pages/Product'
import Products from './pages/Products'


export default class Home extends Component {

  render() {
    return (
      <div >
        
        <Jumbotron>
          <Slideshow />
          <div className='text-center' >
            <h1 style={{color: 'black'}}> Available Products</h1>
            </div>
          <Products />
        </Jumbotron>
      </div>
    )
  }
}
