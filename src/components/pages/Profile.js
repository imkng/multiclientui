import axios from 'axios';
import React, { Component } from 'react'
import './Profile.css'
export default class Profile extends Component {
    constructor(){
        super();
        this.state={
            user: {},
            about: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects,"
        }
       
    }
    componentDidMount(){
      let token = sessionStorage.getItem("accessToken");
      // var headers = new Headers();
      // headers.append('Content-Type', this.constants.jsonContentType);
      
      console.log(token)
    //   var options = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Methods': 'GET',
    //         "Authorization" : `Bearer ${token}`,
    //         'Accept': '*/*'

    //     }
        
    // }
        // let id = sessionStorage.getItem("userId");
        // let token = sessionStorage.getItem("token")
        var axiosinstane = axios.get(`http://localhost:9001/user/getcustomer/2`, { headers: {"Authorization" : `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZW5lMUBnbWFpbC5jb20iLCJleHAiOjE2NDkwOTUxNDgsImlhdCI6MTY0OTA1OTE0OH0.3kY6MFucvcNLDwdf1aGIfen3b7IGfG3GnEGg8K6efz4`} });
        axiosinstane.then((res) => {
            this.setState({ user: res.data });
            console.log(this.state.user);
          }).catch((e)=>{
            console.log("Error: " + e.response)
          });
          
    }

    
  render() {


    
    return (
      <div className='CardP'>Profile
      <div className='upper-container'>
        <div className='image-container'>
          <img src = "https://m.media-amazon.com/images/I/41jLBhDISxL._SY355_.jpg" height=" 100px" width="100px" />

        </div>
      </div>
      <div className='lower-container'>
         Name: {this.state.user.userName}<br/>
         Mobile Number: {this.state.user.mobileNumber}<br/>
         Address: {this.state.user.address}<br/>
         {this.state.about}
      </div>
      </div>
    )
  }
}
