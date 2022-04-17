import axios from 'axios';
import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(){
        super();
        this.state={
            data : [],
        }
    }
    componentDidMount() {
        let token = sessionStorage.getItem("accessToken");
        let id = sessionStorage.getItem("userId")
        var axiosinstane = axios.get(`http://localhost:9004/cart/getcartitems/${id}/false`);
        axiosinstane.then((res) => {
          this.setState({ data: res.data });
          console.log(this.state.data);
        });
      }
  render() {
    return (
      <div>Cart
          {console.log(sessionStorage.getItem("accessToken"))}
      </div>
    )
  }
}
